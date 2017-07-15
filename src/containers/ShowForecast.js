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

class ShowForecast extends Component {
  constructor(props) {
    super(props)

    this._coords = null;
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
    if (!this.props.forecasts.fetching) {
      return (
        <View>
          { console.warn(this.props.forecasts) }
          <Text>{ this.props.forecasts.forecast.name }</Text>
          <Text>{ this.props.forecasts.forecast.weather[0].description }</Text>
          <Text>{ this.props.forecasts.forecast.main.temp }</Text>
        </View>
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
        <Text> It's fucking weathering outside.</Text>
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
