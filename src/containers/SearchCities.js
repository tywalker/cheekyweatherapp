import React, { Component } from 'react';
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
} from 'react-native';

import { connect } from 'react-redux';
import { getSearchText, citiesFetch } from '../actions'
import CityItem from '../components/cityitem'

class SearchCities extends Component {
  constructor(props) {
    super(props)
  }

  startTyping = text => {
    const { dispatch } = this.props
    if (text) {
      dispatch(getSearchText(text))
      dispatch(citiesFetch(text))
    }
    timeTextChange = setTimeout(this.startTyping, 100);
  };

  resetTimer = text => {
    clearTimeout(window.timeTextChange);
    timeTextChange = setTimeout( () => { this.startTyping(text) }, 100);
  };

  initTimer = () => {
    timeTextChange = setTimeout( () => { this.startTyping() }, 100);
  }

  _renderPayload() {
    const { payload } = this.props
    if (payload.place && payload.place.length > 0) {
      return (
        <View>
          { payload.place.map( (city, index) => {
            return (
              <CityItem key={ index } item={ city.name } />
            )
          })}
        </View>
      )
    } else if (payload.place && !Array.isArray(payload.place)) {
      return (
        <CityItem item={ payload.place.name } />
      )
    }
  }

  _renderFailure() {
    const { payload } = this.props
    return (
      <CityItem item={ payload } />
    )
  }

  render() {
    const { fetching, success, handleViewChange } = this.props
    let showSearchResults = fetching && success ? <ActivityIndicator /> : this._renderPayload()
    let showNoResults = this._renderFailure()

    return (
      <View style={{ height: '100%', width: '100%' }}>
        <TouchableNativeFeedback onPress={ () => this.props.handleViewChange('forecast') }>
          <View style={{ height: 50, width: '100%', backgroundColor: '#990000' }}>
              <Text style={{ color: '#fefefe', height: 50, width: '100%' }}>Add a New City</Text>
          </View>
        </TouchableNativeFeedback>
        <TextInput onChangeText={ text => this.resetTimer(text) }
                   editable={ true }
                   onFocus={ () => this.initTimer() }/>
        { success ? showSearchResults : showNoResults }
      </View>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.cities.payload)
  return {
    cities: state.cities,
    searchText: state.cities.text,
    success: state.cities.success,
    fetching: state.cities.fetching,
    payload: state.cities.payload,
  }
}

export default connect(mapStateToProps)(SearchCities);