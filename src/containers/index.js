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
    this._hasFired = null;
  }

  startTyping = text => {
    if (text) {
      this.props.dispatch(getSearchText(text))
      this.props.dispatch(getCitiesBySearch());
      // if (this.props.text) {
      //   this.props.dispatch(getCitiesBySearch(this.props.text));
      // }
      // this._hasFired = true;
      // console.warn(this.props.text)
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

    if (this._hasFired) {
      renderCities = this._renderCities();
    } else {
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
    text: state.cities.text
  }
}

export default connect(mapStateToProps)(Cities);
