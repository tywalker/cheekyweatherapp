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

// actions
import { addForecast, addCity } from '../actions';
// reducers
import weatherApp from '../reducers/index';
// containers
import AddForecast from '../containers/AddForecast';
import ForecastsList from '../containers/ShowForecasts';
// import stylesheets
import indexStyles from '../styles/index';

const store = createStore(weatherApp);
//
// let ShowForecasts = ({ forecasts }) => {
//   return (
//     <View>
//       <Text>Yeh yeh</Text>
//     </View>
//   )
// }

const App = () => {
  return (
    <View>
      <Text>Hello World. This is the App component</Text>
      <AddForecast />
      <ForecastsList />
    </View>
  );
}
//
// const mapStateToProps = state => {
//   return {
//     forecasts: ShowForecasts( state.forecasts )
//   }
// }
//
// forecasts = connect(mapStateToProps)(ShowForecasts)
      //<ShowForecasts />
// App.propTypes = {
//   condition: PropTypes.string.isRequired,
//   city: PropTypes.string.isRequired,
// }

export default App;
