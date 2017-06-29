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
import { createStore } from 'redux'
import PropTypes from 'prop-types';

// reducers
import weatherApp from './src/reducers/index';
// import stylesheets
import indexStyles from './src/styles/index';
// components
import App from './src/components/app';

const store = createStore(weatherApp);
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
