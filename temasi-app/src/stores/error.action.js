import { SET_ERROR } from './ActionTypes';

export const setError = (key, message) => {
  return {
    type: SET_ERROR,
    payload: {
      key,
      message,
    },
  };
};
