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

class SearchCities extends Component {
  constructor() {
    super()

    this._hasFired
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
      console.log('uptop: ', Array.isArray(payload.place))
      return (
        <View>
          { payload.place.map( (city, index) => {
            return (
              <View key={ index } style={{ height: 35, width: '100%', borderBottomWidth: 1, marginTop: 25 }}>
                <TouchableNativeFeedback style={{ width: '100%', height: 35, paddingTop: 25 } }onPress={ () => console.warn('add city') }>
                  <Text>{ city.name }</Text>
                </TouchableNativeFeedback>
              </View>
            )
          })}
        </View>
      )
    } else if (payload.place && !Array.isArray(payload.place)) {
        return (
          <View style={{ height: 35, width: '100%', borderBottomWidth: 1, marginTop: 25 }}>
            <TouchableNativeFeedback style={{ width: '100%', height: 35, paddingTop: 25 } }onPress={ () => console.warn('add city') }>
              <Text>{ payload.place.name }</Text>
            </TouchableNativeFeedback>
          </View>
        )
    } else {
      return <ActivityIndicator />
    }
  }

  render() {
    this._hasFired = false
    return (
      <View style={{ height: '100%', width: '100%' }}>
        <TextInput onChangeText={ text => this.resetTimer(text) }
                   editable={ true }
                   onFocus={ () => this.initTimer() }/>
        { this._renderPayload() }
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    cities: state.cities,
    searchText: state.cities.text,
    fetching: state.cities.fetching,
    payload: state.cities.payload,
  }
}

export default connect(mapStateToProps)(SearchCities);