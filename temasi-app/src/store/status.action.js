import { CLEAR_STATUS, SET_STATUS } from './ActionTypes';

export const setStatus = (key, value) => {
  return {
    type: SET_STATUS,
    payload: {
      key,
      value,
    },
  };
};

export const clearStatus = key => {
  return {
    type: CLEAR_STATUS,
    payload: {
      key,
    },
  };
};
