import React, { Component } from 'react';
import {
  Text,
  TextInput,
  TouchableNativeFeedback,
  View
} from 'react-native';

import { connect } from 'react-redux';
import { receiveCities, getCitiesBySearch, getSearchText } from '../actions'

class Cities extends Component {
  constructor(props) {
    super(props)
    const { cities } = this.props
    this._hasFired = null;
  }

  startTyping = text => {
    if (text) {
      this.props.dispatch(getSearchText(text))
      if (this.props.text) {
        this.props.dispatch(getCitiesBySearch());
      }
      this._hasFired = true;
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
                <TouchableNativeFeedback style={{ width: '100%', height: 35, paddingTop: 25 }}onPress={ () => console.warn('add city') }>
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
    let renderCities;
    if (this._hasFired && this.props.cities.place !== null) {
      renderCities = this._renderCities();
    } else {
      renderCities = this._renderNullSet();
    }
    return (
      <View>
        <TextInput onChangeText={ text => this.resetTimer(text) }
                   editable={ true }
                   onFocus={ () => this.initTimer() }/>
        { renderCities }
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.cities.isFetching,
    cities: state.cities.payload,
    text: state.cities.text
  }
}
