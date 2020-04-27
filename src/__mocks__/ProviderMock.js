import React from 'react';
import { createStore } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import reducer from '../reducers';
import initialState from '../initialState';

const store = createStore(reducer, initialState);
const history = createBrowserHistory();

const ProviderMock = props => (
  <Provider store={store}>
    <Router history={history}>
      {props.children}
    </Router>
  </Provider>
);

export default ProviderMock;
