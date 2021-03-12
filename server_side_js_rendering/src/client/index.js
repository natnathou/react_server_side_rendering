import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { renderRoutes } from 'react-router-config';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Routes from './components/Routes';
import { BrowserRouter } from 'react-router-dom';
import reducer from './reducers';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api',
});

const store = createStore(
  reducer,
  window.INITIAL_STATE,
  applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>{renderRoutes(Routes)}</BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
