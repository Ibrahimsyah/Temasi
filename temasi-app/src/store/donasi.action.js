import {
  ACCEPT_DONASI,
  CONFIRM_DONASI_RECEIVED,
  GET_DONASI,
  GET_DONASI_DETAIL,
  SET_DONASI,
  SET_DONASI_DETAIL,
} from './ActionTypes';

export const acceptDonasi = payload => {
  return {
    type: ACCEPT_DONASI,
    payload,
  };
};

export const confirmDonasiReceived = payload => {
  return {
    type: CONFIRM_DONASI_RECEIVED,
    payload,
  };
};

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

export const getDonasi = payload => {
  return {
    type: GET_DONASI,
    payload,
  };
};

export const getDonasiDetail = payload => {
  return {
    type: GET_DONASI_DETAIL,
    payload,
  };
};
