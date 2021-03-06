import { all } from 'redux-saga/effects';
import authSaga from './auth.saga';
import mainSaga from './main.saga';
import permohonanSaga from './permohonan.saga';
import donasiSaga from './donasi.saga';

export default function* rootSaga() {
  yield all([authSaga(), mainSaga(), permohonanSaga(), donasiSaga()]);
}
