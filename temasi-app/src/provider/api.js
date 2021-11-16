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

export const get = async (url, params) => {
  let queryParam = '';
  if (params) {
    queryParam += '?';
    Object.keys(params).forEach((key, index, arr) => {
      queryParam += `${key}=${params[key]}`;
      if (index !== arr.length - 1) {
        queryParam += '&';
      }
    });
  }

  const { data } = await axios.get(`${AppConfig.BASE_URL}${url}${queryParam}`);
  return data;
};

const post = async (url, body) => {
  const { data } = await axios.post(`${AppConfig.BASE_URL}${url}`, body);
  return data;
};

const put = async (url, body) => {
  const { data } = await axios.put(`${AppConfig.BASE_URL}${url}`, body);
  return data;
};

export default {
  //Basic
  ping: () => get('/ping'),

  // Auth and User
  login: payload => post('/auth/login', payload),
  register: payload => post('/auth/register', payload),
  getUserSummary: () => get('/user/summary'),

  // Upload
  upload: payload => post('/upload', payload),

  // Permohonan
  getPermohonan: payload => get('/permohonan', payload),
  createPermohonan: payload => post('/permohonan', payload),
  getSelfPermohonan: () => get('/permohonan/self'),
  getPermohonanDetail: payload => get(`/permohonan/${payload.permohonanId}`),
  getDonaturPermohonanDetail: payload =>
    get(`/permohonan/matched/${payload.permohonanId}`),

  // Donasi
  getAllDonasi: () => get('/donasi'),
  getDonasiDetail: payload => get(`/donasi/${payload.donasiId}`),
  acceptDonasi: payload => post('/donasi/accept', payload),
  confirmDonasiReceived: payload => put(`/donasi/accept/${payload.donasiId}`),
};
