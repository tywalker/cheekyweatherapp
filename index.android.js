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
  constructor() {
    super();

    this._url = 'http://api.openweathermap.org/data/2.5/weather?id=4487042&appid=a8b071b027a6f5c5f2da92477aac2b63';
    this.state = {
      payload: null,
      payloadChange: true,
      testing: 'TestingOnMount',
    };

    setInterval(() => {
      return fetch(this._url)
        .then((response) => response.json())
        .then((responseJson) => {
          // determine payload updates
          this.setState(previousState => {
            return { payloadChange: !previousState.payload };
          });

          console.warn('fired req, received res');
          // if the payload changes update.
          if (this.state.payloadChange) {
            this.setState({
              payload: responseJson
            });
          }
        })
        .catch((error) => {
          console.warn(error);
        });
      }, 5000);
    }

  render() {
    return (
      <View>
       { console.warn(JSON.stringify(this.state.payload)) }
        <HomeView />
      </View>
    );
  }
}

AppRegistry.registerComponent('CheekyWeatherApp', () => CheekyWeatherApp);
