import { takeLatest, put, call } from 'redux-saga/effects';

import { STATUS_REQUEST_SUCCESS } from '../../config/request';
import api from '../../provider/api';
import { showToast } from '../../utils/error';
import {
  ACCEPT_DONASI,
  CONFIRM_DONASI_RECEIVED,
  GET_DONASI,
  GET_DONASI_DETAIL,
} from '../ActionTypes';
import { setDonasi, setDonasiDetail } from '../donasi.action';
import { setLoading } from '../loading.action';
import { setStatus } from '../status.action';
import { getSelfPermohonan } from './permohonan.saga';

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

function* acceptDonasi(action) {
  try {
    const { payload } = action;
    yield put(setLoading('acceptDonasi', true));
    yield call(api.acceptDonasi, payload);
    yield put(setStatus('acceptDonasi', STATUS_REQUEST_SUCCESS));
  } catch (err) {
    showToast(err);
  } finally {
    yield put(setLoading('acceptDonasi', true));
  }
}

function* confirmDonasiReceived(action) {
  try {
    const { payload } = action;
    yield put(setLoading('confirmDonasiReceived', true));
    yield call(api.confirmDonasiReceived, payload);
    yield call(getSelfPermohonan);
    yield put(setStatus('confirmDonasiReceived', STATUS_REQUEST_SUCCESS));
  } catch (err) {
    showToast(err);
  } finally {
    yield put(setLoading('confirmDonasiReceived', true));
  }
}

function* donasiSaga() {
  yield takeLatest(GET_DONASI, getAllDonasi);
  yield takeLatest(GET_DONASI_DETAIL, getDonasiDetail);
  yield takeLatest(ACCEPT_DONASI, acceptDonasi);
  yield takeLatest(CONFIRM_DONASI_RECEIVED, confirmDonasiReceived);
}

export default donasiSaga;
