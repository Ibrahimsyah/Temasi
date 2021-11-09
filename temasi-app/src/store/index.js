import createSagaMiddleware from '@redux-saga/core';
import { applyMiddleware, combineReducers, createStore } from 'redux';

import sagas from './sagas';
import AccountReducer from './account.reducer';
import LoadingReducer from './loading.reducer';
import MainReducer from './main.reducer';

const reducers = combineReducers({
  account: AccountReducer,
  loading: LoadingReducer,
  main: MainReducer,
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);

export default store;
