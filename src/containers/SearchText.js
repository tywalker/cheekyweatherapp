import React, { Component } from 'react';
import {
  Text,
  TextInput,
  TouchableNativeFeedback,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { searchText, gimmeLogs } from '../actions/index'

let SearchText = ( { dispatch } ) => {
  let startTyping = function() {
      timeTextChange = setTimeout(startTyping, 400);
  };

  let resetTimer = function(text) {
      clearTimeout(window.timeTextChange);
      timeTextChange = setTimeout(startTyping, 400);
  };

  const initTimer = () => {
    timeTextChange = setTimeout(startTyping, 400);
  }

  return (
    <View>
      <TextInput onChangeText={ text => resetTimer() }
                 onSubmitEditing={ () => { true } }
                 editable={ true }
                 onFocus={ () => initTimer() }/>
      <TouchableNativeFeedback onPress={ () => dispatch(gimmeLogs('')) } >
        <Text>Press me to see something crazy!</Text>
      </TouchableNativeFeedback>
    </View>
  );
}

SearchText = connect()(SearchText);

export default SearchText;
