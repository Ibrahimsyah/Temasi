import axios from 'axios';

export default {
  get: async url => {
    const {data} = await axios.get(url);
    return data;
  },
};
