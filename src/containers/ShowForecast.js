import React, { Component } from 'react';
import {
  Geolocation,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View
} from 'react-native';

import { connect } from 'react-redux';
import { geoFetch, forecastFetch } from '../actions'
import ForecastItem from '../components/forecastitem'

class ShowForecast extends Component {
  constructor() {
    super()
  }

  componentWillMount() {
    this.props.dispatch(geoFetch())
  }

  componentDidUpdate() {
    if (this.props.forecasts.fetching) {
      this.props.dispatch(forecastFetch())
    }
  }

  _renderWeather() {
    const { forecasts } = this.props
    if (!this.props.forecasts.fetching) {
      return (
        <ForecastItem forecast={ forecasts.forecast } />
     )
    } else {
      return <Text>No Results</Text>
    }
  }

  render() {
    let renderWeather = this._renderWeather()
    return (
      <View style={{ height: 100, width: '100%', backgroundColor: '#eee' }} >
        <Text>Welcome to my weather app.</Text>
        { renderWeather }
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    geolocation: state.geolocation,
    forecasts: state.forecasts
  }
}

export default connect(mapStateToProps)(ShowForecast);
