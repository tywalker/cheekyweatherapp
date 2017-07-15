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
import { connect } from 'react-redux';
// components
import Forecasts from './forecasts'

// actions
import { SearchCities } from '../containers/SearchCities';
// containers

export default class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <View>
        <Text>Hello World. This is the App component</Text>
        <SearchCities />
      </View>
    )
  };
}
