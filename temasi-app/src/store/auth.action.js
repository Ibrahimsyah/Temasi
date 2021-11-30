import {
  CHANGE_PASSWORD,
  CONFIRM_ACCOUNT,
  LOGIN_USER,
  REGISTER_USER,
} from './ActionTypes';

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

export const confirmAccount = payload => {
  return {
    type: CONFIRM_ACCOUNT,
    payload,
  };
};

export const changePassword = payload => {
  return {
    type: CHANGE_PASSWORD,
    payload,
  };
};
