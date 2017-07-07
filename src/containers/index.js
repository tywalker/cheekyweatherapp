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
        {
          this.props.cities.map( item => {
            return <Text>{ item.name }</Text>
          })
        }
      </View>
    )
  }

  render() {
    let renderCities;
    if (this._hasFired && typeof this.props.cities !== 'undefined') {
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
