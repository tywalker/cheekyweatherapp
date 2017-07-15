import React, { Component } from 'react';
import {
  Text,
  TextInput,
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

  _renderCities() {
    console.log(JSON.stringify(this.props.cities))
    return (
      <View>
        {
          this.props.cities.place.map( (item, index) => {
            return (
              <View key={ index } style={{ height: 35, width: '100%', borderBottomWidth: 1, marginTop: 25 }}>
                <TouchableNativeFeedback style={{ width: '100%', height: 35, paddingTop: 25 } }onPress={ () => console.warn('add city') }>
                  <Text>{ item.name }, {item.country.content}</Text>
                </TouchableNativeFeedback>
              </View>
            );
          })
        }
      </View>
    )
  }

  _renderNullSet() {
    return (
      <View>
        <Text>{ this.props.cities }</Text>
      </View>
    )
  }

  render() {
    const { searchText } = this.props
    let renderCities = null
    this._hasFired = false
    // if (this._hasFired && this.props.cities.place !== null) {
    //   renderCities = this._renderCities()
    // } else {
    //   renderCities = this._renderNullSet()
    // }
    return (
      <View>
        <TextInput onChangeText={ text => this.resetTimer(text) }
                   editable={ true }
                   onFocus={ () => this.initTimer() }/>
        <Text>{ searchText }</Text>
        { renderCities }
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