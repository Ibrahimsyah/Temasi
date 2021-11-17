import { takeLatest, put, call, select } from 'redux-saga/effects';
import { STATUS_REQUEST_SUCCESS } from '../../config/request';

import api from '../../provider/api';
import { showToast } from '../../utils/error';
import {
  GET_DONATUR_PERMOHONAN_DETAIL,
  GET_LATEST_PERMOHONAN,
  GET_PERMOHONAN_DETAIL,
  GET_SELF_PERMOHONAN,
  GET_URGENT_PERMOHONAN,
  SEARCH_PERMOHONAN,
  SUBMIT_PERMOHONAN,
} from '../ActionTypes';
import { setLoading } from '../loading.action';
import {
  setDonaturPermohonanDetail,
  setLatestPermohonan,
  setPermohonanDetail,
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
    yield call(getSelfPermohonan);
    yield put(setStatus('createPermohonan', STATUS_REQUEST_SUCCESS));
  } catch (err) {
    console.log(err);
    showToast(err);
  } finally {
    yield put(setLoading('createPermohonan', false));
  }
}

export function* getSelfPermohonan() {
  try {
    yield put(setLoading('getSelfPermohonan', true));
    const result = yield call(api.getSelfPermohonan);
    yield put(setSelfPermohonan(result));
  } catch (err) {
    console.log(err.stack);
    showToast(err);
  } finally {
    yield put(setLoading('getSelfPermohonan', false));
  }
}

export function* getLatestPermohonan() {
  try {
    const { position } = yield select(state => state.account);
    yield put(setLoading('getLatestPermohonan', true));
    const params = {
      order: 'submit_date',
      latitude: position.latitude,
      longitude: position.longitude,
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

export function* getUrgentPermohonan() {
  try {
    const {
      position: { latitude, longitude },
    } = yield select(state => state.account);
    yield put(setLoading('getUrgentPermohonan', true));
    const params = {
      latitude,
      longitude,
    };
    const result = yield call(api.getPermohonan, params);
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
    const {
      position: { latitude, longitude },
    } = yield select(state => state.account);
    yield put(setLoading('searchPermohonan', true));
    const params = {
      latitude,
      longitude,
    };
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

function* getDonaturPermohonanDetail(action) {
  try {
    const { payload } = action;
    yield put(setLoading('getDonaturPermohonanDetail', true));
    const result = yield call(api.getDonaturPermohonanDetail, payload);
    yield put(setDonaturPermohonanDetail(result));
  } catch (err) {
    console.log(err);
    showToast(err);
  } finally {
    yield put(setLoading('getDonaturPermohonanDetail', false));
  }
}

function* getPermohonanDetail(action) {
  try {
    const { payload } = action;
    yield put(setLoading('getPermohonanDetail', true));
    yield put(setPermohonanDetail(null));
    const result = yield call(api.getPermohonanDetail, payload);
    yield put(setPermohonanDetail(result));
  } catch (err) {
    console.log(err);
    showToast(err);
  } finally {
    yield put(setLoading('getPermohonanDetail', false));
  }
}

function* permohonanSaga() {
  yield takeLatest(SUBMIT_PERMOHONAN, createPermohonan);
  yield takeLatest(GET_SELF_PERMOHONAN, getSelfPermohonan);
  yield takeLatest(GET_LATEST_PERMOHONAN, getLatestPermohonan);
  yield takeLatest(GET_URGENT_PERMOHONAN, getUrgentPermohonan);
  yield takeLatest(SEARCH_PERMOHONAN, searchPermohonan);
  yield takeLatest(GET_DONATUR_PERMOHONAN_DETAIL, getDonaturPermohonanDetail);
  yield takeLatest(GET_PERMOHONAN_DETAIL, getPermohonanDetail);
}

export default permohonanSaga;
