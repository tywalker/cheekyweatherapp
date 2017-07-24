import React, { Component } from 'react';
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
} from 'react-native';
///////////////////////
import { showCities, newCity } from '../services/api'
//////////////////////
import { connect } from 'react-redux';
import { getSearchText, citiesFetch, addCity } from '../actions'
import { returnValidChild, isValidObj } from '../constants'
import CityItem from '../components/cityitem'

class SearchCities extends Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate() {
    showCities()
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
    const { payload, dispatch } = this.props
    if (payload.place && payload.place.length > 0) {
      return (
        <View>
          { payload.place.map( (city, index) => {
            console.log(city)
            let country = isValidObj(city.admin1) && isValidObj(city.admin1.code) ? city.admin1.code : undefined
            country = !country && isValidObj(city.country) && isValidObj(city.country.code) ? city.country.code : country
            return (
              <TouchableNativeFeedback onPress={ () => newCity(city.centroid.latitude, city.centroid.longitude, city.name, country, country) }>
                <View>
                  <CityItem key={ index } item={ city } country={ country ? country : '' } />
                </View>
              </TouchableNativeFeedback>
            )
          })}
        </View>
      )
    } else if (payload.place && !Array.isArray(payload.place)) {
      let country = returnValidChild(payload.place.admin1, payload.place.admin1.code)
      !country ? returnValidChild(payload.place.country, payload.place.country.code) : country

      return (
        <CityItem item={ payload.place.name } country={ country ? country : ''} />
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