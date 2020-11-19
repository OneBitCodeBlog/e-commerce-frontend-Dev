import axios from 'axios';
import { store } from '../store'
import { setApiData } from '../store/modules/auth/reducer'

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

    store.dispatch({type: setApiData.type, payload: apiData});
  }

  return res;
})

api.interceptors.request.use(req => {
  if(req.url.includes('admin')) {
    api.defaults.headers = store.getState().auth.apiData;
  }
  
  return req;
})

export default api;