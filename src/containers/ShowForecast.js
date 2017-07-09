import React, { Component } from 'react';
import {
  Geolocation,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View
} from 'react-native';

import { connect } from 'react-redux';
import { geoSuccess } from '../actions'

class ShowForecast extends Component {
  constructor(props) {
    super(props)

    this._coords = null;
  }
  componentDidMount() {
    let props = this.props
    this._handleGeoPromise(function(position) {
      props.dispatch(geoSuccess(position))
    })
  }

  componentDidUpdate() {
    console.warn(this.props.geolocation)
  }

  async _handleGeoPromise(callback) {
    await navigator.geolocation.getCurrentPosition(position => callback(position));
    this.forceUpdate()
  }

  render() {
    return (
      <View>
        <Text> Jesus. </Text>
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
