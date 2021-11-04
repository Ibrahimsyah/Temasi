import axios from 'axios';
import { AppConfig } from '../configs/app';

axios.defaults.baseURL = AppConfig.BASE_URL;
export default {
  get: async url => {
    const { data } = await axios.get(`${AppConfig.BASE_URL}${url}`);
    return data;
  },
};
