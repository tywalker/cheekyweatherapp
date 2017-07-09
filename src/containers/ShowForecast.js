import React, { Component } from 'react';
import {
  Geolocation,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View
} from 'react-native';

import { connect } from 'react-redux';
import { fetchGeoCoords, fetchForecast, showforecast } from '../actions'

class ShowForecast extends Component {
  constructor(props) {
    super(props)

    this._longitude;
    this._latitude;
  }
  componentWillMount() {
    this.props.dispatch(fetchGeoCoords());
  }

  fetchCoords(interval) {
    const fetchCoords = new Promise(resolve => {
      navigator.geolocation.getCurrentPosition( position => position )
    });
    return fetchCoords;
  }

  async receiveCoords() {
    try {
      let position = await this.fetchCoords(5000);
      this.setState({
        coords: position
      })
    } catch(e) {
      return e
    }
  }

  render() {
    return (
      <View>
      <Text> Buuuuuhhhh</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  console.warn(JSON.stringify(state.user))
  return {
    longitude: state.user.geoCoords,
    latitude: state.user.geoCoords
  }
}

export default connect(mapStateToProps)(ShowForecast);
