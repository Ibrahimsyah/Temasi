import { ADD_ACCOUNT, DELETE_ACCOUNT } from './ActionTypes';

export const setAccount = account => {
  return {
    type: ADD_ACCOUNT,
    payload: account,
  };
};

export const deleteAccount = () => {
  return {
    type: DELETE_ACCOUNT,
  };
};
