import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View
} from 'react-native';

import { connect } from 'react-redux';
import { receiveCities, getAllCities } from '../actions'

class Cities extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fired: false
    }

    this._renderCities = this._renderCities.bind(this)
  }

  startTyping = text => {
    if (text) {
      this.props.dispatch(getAllCities())
      console.warn(JSON.stringify(this.props.cities.cities.place[0].name))
      this.setState({
        fired: true
      })
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
        { this.props.cities.cities.place.map( (city, index) => 
          <Text key={ index }>{ city.name }</Text>
        )}
        <Text>{ this.props.cities.cities.place[0].name }</Text>
      </View>
    )
  }

  render() {
    let renderCities;

    if (this.state.fired) {
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
    cities: state.cities
  }
}

export default connect(mapStateToProps)(Cities);
