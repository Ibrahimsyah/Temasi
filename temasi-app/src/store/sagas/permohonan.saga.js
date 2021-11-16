import { takeLatest, put, call } from 'redux-saga/effects';
import { STATUS_REQUEST_SUCCESS } from '../../config/request';

import api from '../../provider/api';
import { showToast } from '../../utils/error';
import {
  GET_LATEST_PERMOHONAN,
  GET_SELF_PERMOHONAN,
  GET_URGENT_PERMOHONAN,
  SEARCH_PERMOHONAN,
  SUBMIT_PERMOHONAN,
} from '../ActionTypes';
import { setLoading } from '../loading.action';
import {
  setLatestPermohonan,
  setSearchPermohonanResult,
  setSelfPermohonan,
  setUrgentPermohonan,
} from '../permohonan.action';
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

function* getSelfPermohonan() {
  try {
    yield put(setLoading('getSelfPermohonan', true));
    const result = yield call(api.getSelfPermohonan);
    yield put(setSelfPermohonan(result));
  } catch (err) {
    console.log(err);
    showToast(err);
  } finally {
    yield put(setLoading('getSelfPermohonan', false));
  }
}

function* getLatestPermohonan() {
  try {
    yield put(setLoading('getLatestPermohonan', true));
    const params = {
      order: 'submit_date',
    };
    const result = yield call(api.getPermohonan, params);
    yield put(setLatestPermohonan(result));
  } catch (err) {
    console.log(err);
    showToast(err);
  } finally {
    yield put(setLoading('getLatestPermohonan', false));
  }
}

function* getUrgentPermohonan() {
  try {
    yield put(setLoading('getUrgentPermohonan', true));
    const result = yield call(api.getPermohonan);
    yield put(setUrgentPermohonan(result));
  } catch (err) {
    console.log(err);
    showToast(err);
  } finally {
    yield put(setLoading('getUrgentPermohonan', false));
  }
}

function* searchPermohonan(action) {
  try {
    const { payload } = action;
    yield put(setLoading('searchPermohonan', true));
    const params = {};
    if (payload.query) {
      params.q = payload.query;
    }
    if (payload.type) {
      params.type = payload.type;
    }
    const result = yield call(api.getPermohonan, params);
    yield put(setSearchPermohonanResult(result));
  } catch (err) {
    console.log(err);
    showToast(err);
  } finally {
    yield put(setLoading('searchPermohonan', false));
  }
}

function* permohonanSaga() {
  yield takeLatest(SUBMIT_PERMOHONAN, createPermohonan);
  yield takeLatest(GET_SELF_PERMOHONAN, getSelfPermohonan);
  yield takeLatest(GET_LATEST_PERMOHONAN, getLatestPermohonan);
  yield takeLatest(GET_URGENT_PERMOHONAN, getUrgentPermohonan);
  yield takeLatest(SEARCH_PERMOHONAN, searchPermohonan);
}

export default permohonanSaga;
