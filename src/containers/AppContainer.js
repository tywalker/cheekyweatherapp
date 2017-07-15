import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import { connect } from 'react-redux';
import SearchCities from './SearchCities'

export default class AppContainer extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <View style={{ height: 100, width: '100%', backgroundColor: '#eee' }} >
        <Text>Welcome to my weather app.</Text>
        <SearchCities/>

      </View>
    )
  }
}
