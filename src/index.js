import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './store/reducers/index';
import App from './containers/App';

/*
Cоздать глобальный store для всего приложения
и подключить возможность использования redux-devtools https://github.com/zalmoxisus/redux-devtools-extension#usage */
/* eslint-disable no-underscore-dangle */
const composeEnhancer = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
/* eslint-enable */

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
