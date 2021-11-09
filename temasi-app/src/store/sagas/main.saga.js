import { takeLatest, put, call } from 'redux-saga/effects';
import api from '../../provider/api';
import { generateFormData } from '../../utils/formData';
import { UPLOAD_IMAGE } from '../ActionTypes';
import { setLoading } from '../loading.action';
import { setUploadResult } from '../main.action';

function* uploadPhoto(action) {
  try {
    const { payload } = action;
    yield put(setLoading('uploadPhoto', true));
    const formData = generateFormData(payload);
    const result = yield call(api.upload, formData);
    yield put(setUploadResult(result));
  } catch (err) {
    console.log(err);
  } finally {
    yield put(setLoading('uploadPhoto', false));
  }
}

function* mainSaga() {
  yield takeLatest(UPLOAD_IMAGE, uploadPhoto);
}

export default mainSaga;
