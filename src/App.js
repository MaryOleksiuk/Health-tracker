import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'connected-react-router';
import { Routes } from './navigation';

import { history } from './init/middleware';
import { store } from './init/store';

import './theme/index.scss';

export const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  )
};
