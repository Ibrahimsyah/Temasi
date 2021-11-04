import axios from 'axios';
import { AppConfig } from '../config/app';
import { ACCOUNT_STORAGE_KEY } from '../config/storage';
import storage from './storage';

axios.defaults.baseURL = AppConfig.BASE_URL;

axios.interceptors.response.use(
  response => Promise.resolve(response),
  error => {
    const { data } = error.response;
    return Promise.reject(
      data?.error || 'Kesalahan sistem, segera hubungi admin',
    );
  },
);
axios.interceptors.request.use(async config => {
  const account = await storage.getData(ACCOUNT_STORAGE_KEY);
  if (account?.token) {
    config.headers.authorization = `Bearer ${account.token}`;
  }
  return config;
});

const get = async url => {
  const { data } = await axios.get(`${AppConfig.BASE_URL}${url}`);
  return data;
};

const post = async (url, body) => {
  const { data } = await axios.post(`${AppConfig.BASE_URL}${url}`, body);
  return data;
};

export default {
  ping: () => get('/ping'),
  login: payload => post('/auth/login', payload),
};
