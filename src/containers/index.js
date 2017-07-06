import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View
} from 'react-native';

import { connect } from 'react-redux';
import { receiveCities, getCitiesBySearch, getSearchText } from '../actions'

class Cities extends Component {
  constructor(props) {
    super(props)

    this._renderCities = this._renderCities.bind(this)
  }

  startTyping = text => {
    if (text) {
      this.props.dispatch(getSearchText(text))
      //this.props.dispatch(getCitiesBySearch(text));
    }
    timeTextChange = setTimeout(this.startTyping, 400);
  };

  resetTimer = text => {
    clearTimeout(window.timeTextChange);
    timeTextChange = setTimeout( () => { this.startTyping(text) }, 400);
  };

  initTimer = () => {
    timeTextChange = setTimeout( () => { this.startTyping() }, 400);
  }

  _renderCities() {
    return (
      <View>
        { this.props.cities.place.map( (city, index) =>
          <Text key={ index }>{ city.name }</Text>
        )}
      </View>
    )
  }

  render() {
    let renderCities;

    if (this.props.isFetching) {
      console.log(this.props.isFetching)
      renderCities = this._renderCities();
    } else {
      console.log(this.props.isFetching)
      renderCities = null
    }

    return (
      <View>
        <TextInput onChangeText={ text => this.resetTimer(text) }
                   editable={ true }
                   onFocus={ () => this.initTimer() }/>
        {renderCities}

      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.cities.isFetching,
    cities: state.cities.payload,
    searchText: state.cities.searchText
  }
}

export default connect(mapStateToProps)(Cities);
