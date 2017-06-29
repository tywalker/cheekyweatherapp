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

  let timerFired = function() {
      console.log('fired');
      window.myTimer = setTimeout(timerFired, 1000);
  };

  let reset = function() {
      clearTimeout(window.myTimer);
      window.myTimer = setTimeout(timerFired, 1000);
  };

  let myTimer = setTimeout(timerFired, 1000);

  return (
    <View>
      <TextInput onChangeText={ text => reset() }
                 onSubmitEditing={ () => { true } }
                 editable={ true }/>
      <TouchableNativeFeedback onPress={ () => dispatch(gimmeLogs('')) } >
        <Text>Press me to see something crazy!</Text>
      </TouchableNativeFeedback>
    </View>
  );
}

SearchText = connect()(SearchText);

export default SearchText;
