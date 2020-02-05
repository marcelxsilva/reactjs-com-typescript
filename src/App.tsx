import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import RepositoryList from './components/RepositoryList';

export default () => (
  <Provider store={store}>
    <RepositoryList />
  </Provider>
);
