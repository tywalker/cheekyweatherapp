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
  let warn = console.log('warning, warning, warning');
  return (
    <View>
      <TextInput onChangeText={ (text) => dispatch(searchText(text)) } />
      <TouchableNativeFeedback onPress={ () => dispatch(gimmeLogs('')) }>
        <Text>Press me to see something crazy!</Text>
      </TouchableNativeFeedback>
    </View>
  );
}

SearchText = connect()(SearchText);

export default SearchText;
