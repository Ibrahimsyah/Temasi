import { LOGIN_USER, REGISTER_USER } from './ActionTypes';

export const loginUser = payload => {
  return {
    type: LOGIN_USER,
    payload,
  };
};

export const registerUser = payload => {
  return {
    type: REGISTER_USER,
    payload,
  };
};
