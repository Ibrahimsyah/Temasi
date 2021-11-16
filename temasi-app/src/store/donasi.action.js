import { SET_DONASI, SET_DONASI_DETAIL } from './ActionTypes';

export const setDonasi = payload => {
  return {
    type: SET_DONASI,
    payload,
  };
};

export const setDonasiDetail = payload => {
  return {
    type: SET_DONASI_DETAIL,
    payload,
  };
};
