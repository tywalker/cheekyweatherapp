import React, { Component } from 'react';
import {
  ActivityIndicator,
  TextInput,
  View,
} from 'react-native';

import { connect } from 'react-redux';
import { getSearchText, citiesFetch } from '../actions'
import CityItem from '../components/cityitem'

class SearchCities extends Component {
  constructor() {
    super()
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
    const { fetching, success } = this.props
    let showSearchResults = fetching && success ? <ActivityIndicator /> : this._renderPayload()
    let showNoResults = this._renderFailure()
    console.log(success)
    return (
      <View style={{ height: '100%', width: '100%' }}>
        <TextInput onChangeText={ text => this.resetTimer(text) }
                   editable={ true }
                   onFocus={ () => this.initTimer() }/>
        { success ? showSearchResults : showNoResults }
      </View>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.cities)
  return {
    cities: state.cities,
    searchText: state.cities.text,
    success: state.cities.success,
    fetching: state.cities.fetching,
    payload: state.cities.payload,
  }
}

export default connect(mapStateToProps)(SearchCities);