import {
  ADD_ACCOUNT,
  DELETE_ACCOUNT,
  GET_ACCOUNT_SUMMARY,
  SET_ACCOUNT_STATUS,
  SET_ACCOUNT_SUMMARY,
  SET_POSITION,
} from './ActionTypes';

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

export const setAccountSummary = payload => {
  return {
    type: SET_ACCOUNT_SUMMARY,
    payload,
  };
};

export const getAccountSummary = () => {
  return {
    type: GET_ACCOUNT_SUMMARY,
  };
};

export const setAccountStatus = payload => {
  return {
    type: SET_ACCOUNT_STATUS,
    payload,
  };
};
