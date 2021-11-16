import { takeLatest, put, call } from 'redux-saga/effects';
import { STATUS_REQUEST_SUCCESS } from '../../config/request';

import api from '../../provider/api';
import { showToast } from '../../utils/error';
import { GET_DONASI, GET_DONASI_DETAIL } from '../ActionTypes';
import { setDonasi, setDonasiDetail } from '../donasi.action';
import { setLoading } from '../loading.action';

function* getAllDonasi() {
  try {
    yield put(setLoading('getAllDonasi', true));
    const result = yield call(api.getAllDonasi);
    yield put(setDonasi(result));
  } catch (err) {
    showToast(err);
  } finally {
    yield put(setLoading('getAllDonasi', true));
  }
}

function* getDonasiDetail(action) {
  try {
    const { payload } = action;
    yield put(setLoading('getDonasiDetail', true));
    const result = yield call(api.getDonasiDetail, payload);
    yield put(setDonasiDetail(result));
  } catch (err) {
    showToast(err);
  } finally {
    yield put(setLoading('getDonasiDetail', true));
  }
}

function* donasiSaga() {
  yield takeLatest(GET_DONASI, getAllDonasi);
  yield takeLatest(GET_DONASI_DETAIL, getDonasiDetail);
}

export default donasiSaga;
