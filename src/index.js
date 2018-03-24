import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import reducer from './reducers';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

function configureStore(initialState) {
  const middlewares = [thunkMiddleware];

  // Log only in development
  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
  }

  const enhancer = compose(applyMiddleware(...middlewares));
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);

// Register service worker
registerServiceWorker();
