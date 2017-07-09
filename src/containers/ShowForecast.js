import React, { Component } from 'react';
import {
  Geolocation,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View
} from 'react-native';

import { connect } from 'react-redux';
import { geoSuccess, forecastSuccess } from '../actions'

class ShowForecast extends Component {
  constructor(props) {
    super(props)

    this._coords = null;
  }

  componentWillMount() {
    this.props.dispatch(forecastSuccess())
  }

  componentDidMount() {
    this.props.dispatch(forecastSuccess())
  }

  componentDidUpdate() {
    console.warn(this.props.geolocation[0].coords.latitude)
    console.warn(this.props.geolocation[0])
  }

  _renderLat() {
    if (!this.props.geolocation.fetching) {
      return (<Text>{ this.props.geolocation[0].coords.latitude }</Text>)
    } else {
      return (<Text>No Results</Text>)
    }
  }

  render() {
    let lat = this._renderLat()
    return (
      <View>
        <Text onPress={ () => this.props.dispatch(geoSuccess()) }> Jesus. </Text>
        { lat }
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    geolocation: state.geolocation
  }
}

export default connect(mapStateToProps)(ShowForecast);
