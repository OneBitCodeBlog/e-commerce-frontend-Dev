import axios, { AxiosResponse } from 'axios';
import Cookie from 'js-cookie';
import ApiData from '../dtos/ApiData';
import ApiResponseError from '../dtos/ApiResponseError';

// importação do router para que possamos realizar o redirect caso o usuário recebe a mensagem da api de que não acesso ao recurso que tentou acessar.
import Router from 'next/router';
import { toast } from 'react-toastify';

const api = axios.create({
  baseURL: 'http://localhost:3000'
});

// adição da função para setar os headers de authẽnticação na api e nos cookies do browser, iremos utilizar ela no interceptor de request (tanto no fluxo normal quando no fluxo de erro).
function setHeaders(res: AxiosResponse<any>) {
  if(res.headers['access-token'] && res.headers['access-token'] !== '') {
    const apiData: ApiData = {
      'access-token': res.headers['access-token'],
      client: res.headers.client,
      expiry: res.headers.expiry,
      'token-type': res.headers['token-type'],
      uid: res.headers.uid
    };

    api.defaults.headers = apiData;
    Cookie.set('@api-data', apiData);
  }
}

api.interceptors.response.use(res => {
  setHeaders(res);
  return res;
}
, err => {
  // caso um erro ocorra na response, um novo token é retornado, logo devemos atualizá-lo na api e nos cookies
  if (err.response) {
    setHeaders(err.response);

    const data = err.response.data;

    // aqui estamos tratando os erros no padrão que o rails no devolve, se existem algum array de erros, iremos extrair o nome do campo e as mensagens para que as mesmas possam ser exibidas na tela utilizando um toast
    if (data && data.errors && data.errors.fields) {
      const errors = data.errors as ApiResponseError;

      const fieldsName = Object.keys(errors.fields)

      fieldsName.forEach(error => {
        toast.error(error + ': ' + errors.fields[error].join(`, `))
      })

      console.log('errors', errors);
    }
  }

  // caso a response tenha um status de não autorizado ou acesso negado, o usuário será redirecionado para o login.
  if (err.response && (
      err.response.status === 401 ||
      err.response.status === 403
    )) {
    Router.push('/Auth/Login');
  }

  throw err;
});

api.interceptors.request.use(req => {
  req.headers = { ContentType: 'application/json' };

  if (
    req.url.includes('admin') ||
    req.url.includes('storefront/v1/wish_items') ||
    req.url.includes('auth/v1/user') ||
    req.url.includes('storefront/v1/coupons') ||
    req.url.includes('storefront/v1/checkouts') ||
    req.url.includes('storefront/v1/orders') ||
    req.url.includes('storefront/v1/games')
  ) {
    const apiDataCookie = Cookie.get('@api-data');

    if (!apiDataCookie) {
      return req;
    }

    const apiData: ApiData = JSON.parse(apiDataCookie);
    req.headers = { ...apiData, ...req.headers };
  }

  return req;
})

export default api;