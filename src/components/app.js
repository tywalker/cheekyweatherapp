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
  TouchableNativeFeedback,
  View
} from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux'

// actions
import { addCity } from '../actions';
// reducers
import weatherApp from '../reducers/index';
// import stylesheets
import indexStyles from '../styles/index';
// components
import SearchCity from '../components/searchcity';

const App = ({ dispatch }) => {

  return (
    <View>
      <Text>Hello World. This is the App component</Text>
      <TouchableNativeFeedback onPress={ () => dispatch(addCity('Sunny')) }>
        <View style={ { width: '100%', height: 50, backgroundColor: '#eee' } }>
          <Text>Press Me to Add Weather</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );

}

App = connect()(App)

export default App;
