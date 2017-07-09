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
    this.props.dispatch(forecastFetch())
  }

  componentDidUpdate() {
    if (this.props.forecasts.fetching) {
      this.props.dispatch(forecastFetch())
    }
  }

  _renderLat() {
    if (!this.props.geolocation.fetching) {
      return (
        <View>
          <Text>{ this.props.geolocation.coords.latitude }</Text>
          <Text>{ this.props.geolocation.coords.longitude }</Text>
        </View>
      )
    } else {
      return (<Text>No Results</Text>)
    }
  }

  render() {
    let lat = this._renderLat()
    return (
      <TouchableNativeFeedback onPress={ () => this.props.dispatch(geoFetch())}>
      <View style={{ height: 100, width: '100%', backgroundColor: '#eee' }} >
        <Text> Jesus. Mother. Mary. Joseph </Text>
        { lat }
      </View>
      </TouchableNativeFeedback>
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
