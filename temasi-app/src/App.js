import React from 'react';
import { Provider } from 'react-redux';

import { GlobalRouter } from './router/GlobalRouter';
import store from './store';

export default () => {
  return (
    <Provider store={store}>
      <GlobalRouter />
    </Provider>
  );
};
