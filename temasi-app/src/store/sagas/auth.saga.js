import { takeLatest, put, call } from 'redux-saga/effects';
import api from '../../provider/api';
import { showToast } from '../../utils/error';
import {
  setAccount,
  setAccountStatus,
  setAccountSummary,
} from '../account.action';

import {
  CONFIRM_ACCOUNT,
  GET_ACCOUNT_SUMMARY,
  LOGIN_USER,
  REGISTER_USER,
} from '../ActionTypes';
import { setLoading } from '../loading.action';

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

function* authSaga() {
  yield takeLatest(REGISTER_USER, register);
  yield takeLatest(LOGIN_USER, login);
  yield takeLatest(GET_ACCOUNT_SUMMARY, getUserSummary);
  yield takeLatest(CONFIRM_ACCOUNT, confirmAccount);
}

export default authSaga;
