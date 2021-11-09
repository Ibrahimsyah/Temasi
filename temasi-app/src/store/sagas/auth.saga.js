import { takeLatest, put, call } from 'redux-saga/effects';
import api from '../../provider/api';
import { setAccount } from '../account.action';

import { LOGIN_USER, REGISTER_USER } from '../ActionTypes';
import { setError } from '../error.action';
import { setLoading } from '../loading.action';

function* register(action) {
  try {
    yield put(setLoading('register', true));
    const result = yield call(api.register, action.payload);
    yield put(setAccount(result));
  } catch (err) {
    console.log(err);
    yield put(setError('register', err));
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
    yield put(setError('login', err));
  } finally {
    yield put(setLoading('login', false));
  }
}

function* authSaga() {
  yield takeLatest(REGISTER_USER, register);
  yield takeLatest(LOGIN_USER, login);
}

export default authSaga;
