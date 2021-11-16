import {
  SET_DONATUR_PERMOHONAN_DETAIL,
  SET_LATEST_PERMOHONAN,
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
