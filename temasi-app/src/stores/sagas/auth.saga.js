import { takeLatest, put, call } from 'redux-saga/effects';
import api from '../../providers/api';

import { LOGIN_USER, REGISTER_USER } from '../ActionTypes';
import { setError } from '../error.action';
import { setLoading } from '../loading.action';

const registerNewUser = async userData => {};

const loginUser = async userData => {
  const result = await api.get('/ping');
  return result;
};

function* register(action) {}

function* login(action) {
  try {
    yield put(setLoading('login', true));
    const result = yield call(loginUser, action.payload);
    yield put(setLoading('login', false));
    console.log(result);
  } catch (err) {
    yield put(setError('login', err));
  }
}

function* authSaga() {
  yield takeLatest(REGISTER_USER, register);
  yield takeLatest(LOGIN_USER, login);
}

export default authSaga;
