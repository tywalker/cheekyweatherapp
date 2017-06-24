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

// import stylesheets
import indexStyles from './src/styles/index';
// components
import HomeView from './src/homeview';

export default class CheekyWeatherApp extends Component {
  render() {
    return (
      <View>
        <HomeView />
      </View>
    );
  }
}

AppRegistry.registerComponent('CheekyWeatherApp', () => CheekyWeatherApp);
