import { GET_ACCOUNT, ADD_ACCOUNT, DELETE_ACCOUNT } from './ActionTypes';

export const setAccount = account => {
  return {
    type: ADD_ACCOUNT,
    payload: account,
  };
};

export const getAccount = () => {
  return {
    type: GET_ACCOUNT,
  };
};

export const deleteAccount = () => {
  return {
    type: DELETE_ACCOUNT,
  };
};
