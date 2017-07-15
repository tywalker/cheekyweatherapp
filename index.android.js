/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import AppContainer from './src/containers/AppContainer'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './src/reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(ReduxThunk)
);

const CheekyWeatherApp = () => (
  <Provider store={ store }>
    <AppContainer />
  </Provider>
)

AppRegistry.registerComponent('CheekyWeatherApp', () => CheekyWeatherApp);
