import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { searchText } from '../actions'

class Cities extends Component {

  startTyping = text => {
    timeTextChange = setTimeout(this.startTyping, 10);
  };

  resetTimer = function(text) {
    clearTimeout(window.timeTextChange);
    timeTextChange = setTimeout( () => { this.startTyping(text) }, 10);
  };

  initTimer = () => {
    timeTextChange = setTimeout( () => { this.startTyping() }, 10);
  }

  render() {
    return (
      <View>
        <TextInput onChangeText={ text => this.resetTimer(text) }
                   onSubmitEditing={ text => sayHello(text) }
                   editable={ true }
                   onFocus={ () => this.initTimer() }/>
      </View>
    );
  }
}
export default SearchText;
