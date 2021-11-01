import { takeLatest } from 'redux-saga/effects';
const registerNewUser = async userData => {};

const loginUser = async userData => {};

function* register(action) {}

function* login(action) {}

function* authSaga() {
  yield takeLatest('REGISTER_USER', register);
  yield takeLatest('LOGIN_USER', login);
}

export default authSaga;
