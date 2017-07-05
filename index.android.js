/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
} from 'react-native';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/sagas/sagas';
import rootReducer from './src/reducers';

// components
import App from './src/components/app';

// create saga middleware
const sagaMiddleware = createSagaMiddleware();
// Mount it on the store
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

const CheekyWeatherApp = () => (
  <Provider store={ store }>
    <App />
  </Provider>
)

AppRegistry.registerComponent('CheekyWeatherApp', () => CheekyWeatherApp);
