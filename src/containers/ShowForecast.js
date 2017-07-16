import React, { Component } from 'react';
import {
  Geolocation,
  Text,
  TouchableNativeFeedback,
  View
} from 'react-native';

import { connect } from 'react-redux';
import { geoFetch, forecastFetch } from '../actions'
import ForecastItem from '../components/forecastitem'

class ShowForecast extends Component {
  constructor(props) {
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
        <TouchableNativeFeedback onPress={ () => this.props.handleViewChange('search')}>
          <View style={{ height: 50, width: '100%', backgroundColor: '#990000' }}>
              <Text style={{ color: '#fefefe', height: 50, width: '100%' }}>Add a New City</Text>
          </View>
        </TouchableNativeFeedback>
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
