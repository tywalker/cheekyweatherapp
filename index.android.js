/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  ScrollView,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { forecasts, cities } from './src/reducers';
import PropTypes from 'prop-types';
import createSagaMiddleware from 'redux-saga';

//import * as sagas from './src/sagas';
import { sayHello } from './src/sagas';


// reducers
import weatherApp from './src/reducers/index';
// import stylesheets
import indexStyles from './src/styles/index';
// components
import App from './src/components/app';

// create saga middleware
const sagaMiddleware = createSagaMiddleware();
// Mount it on the store
const store = createStore(
  combineReducers({ forecasts, cities }),
  applyMiddleware(sagaMiddleware)
);
/* Listener that logs everytime state changes
   --- may be useful again.
*/

//sagaMiddleware.run(sayHello);

// console.log(store.getState())
// let unsubscribe = store.subscribe(() => {
//   console.log(store.getState());
// });
//
const CheekyWeatherApp = () => (
  <Provider store={ store }>
    <ScrollView scrollEnabled={ false }>
      <App />
    </ScrollView>
  </Provider>
)

AppRegistry.registerComponent('CheekyWeatherApp', () => CheekyWeatherApp);
