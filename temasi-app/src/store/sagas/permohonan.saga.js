import { takeLatest, put, call } from 'redux-saga/effects';
import { STATUS_REQUEST_SUCCESS } from '../../config/request';

import api from '../../provider/api';
import { showToast } from '../../utils/error';
import { SUBMIT_PERMOHONAN } from '../ActionTypes';
import { setLoading } from '../loading.action';
import { setStatus } from '../status.action';

function* createPermohonan(action) {
  try {
    yield put(setLoading('createPermohonan', true));
    const { payload } = action;
    yield call(api.createPermohonan, payload);
    yield put(setStatus('createPermohonan', STATUS_REQUEST_SUCCESS));
  } catch (err) {
    console.log(err);
    showToast(err);
  } finally {
    yield put(setLoading('createPermohonan', false));
  }
}

function* permohonanSaga() {
  yield takeLatest(SUBMIT_PERMOHONAN, createPermohonan);
}

export default permohonanSaga;
