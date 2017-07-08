import React, { Component } from 'react';
import {
  Geolocation,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View
} from 'react-native';

import { connect } from 'react-redux';
import { getGeoCoords, fetchForecast, showforecast } from '../actions'

class ShowForecast extends Component {
  constructor(props) {
    super(props)
    const { cities } = this.props
    this._hasFired = null;
  }
  componentDidMount() {
    console.warn('mounted')
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
  console.warn(JSON.stringify(state))
  return {
    longitude: state.user.geoCoords,
    latitude: state.user.geoCoords
  }
}

export default connect(mapStateToProps)(ShowForecast);
