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
      return (
        <View>
          <Text>{ this.props.geolocation[0].coords.latitude }</Text>
          <Text>{ this.props.geolocation[0].coords.longitude }</Text>
        </View>
      )
    } else {
      return (<Text>No Results</Text>)
    }
  }

  render() {
    let lat = this._renderLat()
    return (
      <View style={{ height: 100, width: '100%', backgroundColor: '#eee' }} onPress={ () => console.warn('working') }>
        <Text> Jesus. Mother. Mary. Joseph </Text>
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
