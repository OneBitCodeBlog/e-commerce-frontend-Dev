import axios from 'axios';
import Cookie from 'js-cookie';

const api = axios.create({
  baseURL: 'http://localhost:3000'
});

api.interceptors.response.use(res => {
  if(res.headers['access-token']) {
    const apiData = {
      'access-token': res.headers['access-token'],
      client: res.headers.client,
      expiry: res.headers.expiry,
      'token-type': res.headers['token-type'],
      uid: res.headers.uid
    };

    Cookie.set("@api-data", JSON.stringify(apiData))

    api.defaults.headers = apiData;
  }

  return res;
})

export default api;