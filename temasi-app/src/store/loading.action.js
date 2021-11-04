import { SET_LOADING } from './ActionTypes';

export const setLoading = (key, value) => {
  return {
    type: SET_LOADING,
    payload: {
      key,
      value,
    },
  };
};
