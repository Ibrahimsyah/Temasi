import React from 'react';
import { GlobalRouter } from './router/GlobalRouter';
import { createStore } from 'redux'
import reducer from './stores'
import { Provider } from 'react-redux'

export default () => {
  const store = createStore(reducer)
  return <Provider store={store}>
    <GlobalRouter />
  </Provider>;
};
