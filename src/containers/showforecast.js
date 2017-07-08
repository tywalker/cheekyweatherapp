import React, { Component } from 'react';
import {
  Text,
  TextInput,
  TouchableNativeFeedback,
  View
} from 'react-native';

import { connect } from 'react-redux';
import { getGeoCoords, fetchForecast, showforecast } from '../actions'

class Cities extends Component {
  constructor(props) {
    super(props)
    const { cities } = this.props
    this._hasFired = null;
  }


  render() {
    return (
      <View>
        <Text>This is where we will show the forecast</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.cities.isFetching,
    cities: state.cities.payload,
    text: state.cities.text
  }
}

export default connect(mapStateToProps)(Cities);
