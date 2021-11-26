import { takeLatest, put, call } from 'redux-saga/effects';

import { STATUS_REQUEST_SUCCESS } from '../../config/request';
import api from '../../provider/api';
import { showToast } from '../../utils/error';
import {
  setAccount,
  setAccountStatus,
  setAccountSummary,
} from '../account.action';

import {
  CHANGE_PASSWORD,
  CONFIRM_ACCOUNT,
  GET_ACCOUNT_SUMMARY,
  LOGIN_USER,
  REGISTER_USER,
} from '../ActionTypes';
import { setLoading } from '../loading.action';
import { setStatus } from '../status.action';

function* register(action) {
  try {
    yield put(setLoading('register', true));
    const result = yield call(api.register, action.payload);
    yield put(setAccount(result));
  } catch (err) {
    console.log(err);
    showToast(err);
  } finally {
    yield put(setLoading('register', false));
  }
}

function* login(action) {
  try {
    yield put(setLoading('login', true));
    const result = yield call(api.login, action.payload);
    yield put(setAccount(result));
  } catch (err) {
    console.log(err);
    showToast(err);
  } finally {
    yield put(setLoading('login', false));
  }
}

export function* getUserSummary() {
  try {
    yield put(setLoading('getUserSummary', true));
    const result = yield call(api.getUserSummary);
    yield put(setAccountSummary(result));
  } catch (err) {
    console.log(err);
    showToast(err);
  } finally {
    yield put(setLoading('getUserSummary', false));
  }
}

export function* confirmAccount(action) {
  try {
    yield put(setLoading('confirmAccount', true));
    yield call(api.confirmAccount, action.payload);
    yield put(setAccountStatus(true));
  } catch (err) {
    console.log(err);
    showToast(err);
  } finally {
    yield put(setLoading('confirmAccount', false));
  }
}

function* changePassword(action) {
  try {
    const { payload } = action;
    yield put(setLoading('changePassword', true));
    yield call(api.changePassword, payload);
    yield put(setStatus('changePassword', STATUS_REQUEST_SUCCESS));
  } catch (err) {
    console.log(err);
    showToast(err);
  } finally {
    yield put(setLoading('changePassword', false));
  }
}

function* authSaga() {
  yield takeLatest(REGISTER_USER, register);
  yield takeLatest(LOGIN_USER, login);
  yield takeLatest(GET_ACCOUNT_SUMMARY, getUserSummary);
  yield takeLatest(CONFIRM_ACCOUNT, confirmAccount);
  yield takeLatest(CHANGE_PASSWORD, changePassword);
}

export default authSaga;
