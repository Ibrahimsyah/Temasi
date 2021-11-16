import {
  GET_DONATUR_PERMOHONAN_DETAIL,
  GET_LATEST_PERMOHONAN,
  GET_PERMOHONAN_DETAIL,
  GET_SELF_PERMOHONAN,
  GET_URGENT_PERMOHONAN,
  SEARCH_PERMOHONAN,
  SET_DONATUR_PERMOHONAN_DETAIL,
  SET_LATEST_PERMOHONAN,
  SET_PERMOHONAN_DETAIL,
  SET_SEARCH_PERMOHONAN_RESULT,
  SET_SELF_PERMOHONAN,
  SET_URGENT_PERMOHONAN,
  SUBMIT_PERMOHONAN,
} from './ActionTypes';

export const submitPermohonan = payload => {
  return {
    type: SUBMIT_PERMOHONAN,
    payload,
  };
};

export const setSelfPermohonan = payload => {
  return {
    type: SET_SELF_PERMOHONAN,
    payload,
  };
};

export const setLatestPermohonan = payload => {
  return {
    type: SET_LATEST_PERMOHONAN,
    payload,
  };
};

export const setUrgentPermohonan = payload => {
  return {
    type: SET_URGENT_PERMOHONAN,
    payload,
  };
};

export const setSearchPermohonanResult = payload => {
  return {
    type: SET_SEARCH_PERMOHONAN_RESULT,
    payload,
  };
};

export const setDonaturPermohonanDetail = payload => {
  return {
    type: SET_DONATUR_PERMOHONAN_DETAIL,
    payload,
  };
};

export const setPermohonanDetail = payload => {
  return {
    type: SET_PERMOHONAN_DETAIL,
    payload,
  };
};

export const getSelfPermohonan = payload => {
  return {
    type: GET_SELF_PERMOHONAN,
    payload,
  };
};

export const getLatestPermohonan = payload => {
  return {
    type: GET_LATEST_PERMOHONAN,
    payload,
  };
};

export const getUrgentPermohonan = payload => {
  return {
    type: GET_URGENT_PERMOHONAN,
    payload,
  };
};

export const getDonaturPermohonanDetail = payload => {
  return {
    type: GET_DONATUR_PERMOHONAN_DETAIL,
    payload,
  };
};

export const getPermohonanDetail = payload => {
  return {
    type: GET_PERMOHONAN_DETAIL,
    payload,
  };
};

export const searchPermohonan = payload => {
  return {
    type: SEARCH_PERMOHONAN,
    payload,
  };
};
