import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000'
});

api.interceptors.response.use(res => {
  console.log(res.headers['access-token'])

  if(res.headers['access-token']) {
    api.defaults.headers = {
      'access-token': res.headers['access-token'],
      client: res.headers.client,
      expiry: res.headers.expiry,
      'token-type': res.headers['token-type'],
      uid: res.headers.uid
    }
  }
  console.log('access-token:', res.headers['access-token'])
  return res;
})

export default api;