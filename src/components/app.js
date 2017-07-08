/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// components
import SearchCity from './searchcity';
import Forecasts from './forecasts';
// import stylesheets
import indexStyles from '../styles/index';

const App = () => {
  let renderView = <SearchCity />
  return (
    <View>
      <Text>Hello World. This is the App component</Text>
      <Forecasts />
    </View>
  );
}
export default App;
