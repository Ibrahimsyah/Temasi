import createSagaMiddleware from '@redux-saga/core';
import { applyMiddleware, combineReducers, createStore } from 'redux';

import sagas from './sagas';
import AccountReducer from './account.reducer';
import LoadingReducer from './loading.reducer';
import MainReducer from './main.reducer';
import StatusReducer from './status.reducer';
import PermohonanReducer from './permohonan.reducer';
import DonasiReducer from './donasi.reducer';

const reducers = combineReducers({
  account: AccountReducer,
  loading: LoadingReducer,
  main: MainReducer,
  status: StatusReducer,
  permohonan: PermohonanReducer,
  donasi: DonasiReducer,
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);

export default store;
