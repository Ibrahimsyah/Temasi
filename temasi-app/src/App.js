import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';

import { GlobalRouter } from './router/GlobalRouter';
import reducer from './stores';
import sagas from './stores/sagas';

export default () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(sagas);

  return (
    <Provider store={store}>
      <GlobalRouter />
    </Provider>
  );
};
