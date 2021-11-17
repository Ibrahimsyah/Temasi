import { ADD_ACCOUNT, DELETE_ACCOUNT, SET_POSITION } from './ActionTypes';

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

export const setPosition = payload => {
  return {
    type: SET_POSITION,
    payload,
  };
};
