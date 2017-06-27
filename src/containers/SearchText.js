import React, { Component } from 'react';
import {
  Text,
  TextInput,
  TouchableNativeFeedback,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { addForecast } from '../actions';
import { searchText } from '../actions'

let SearchText = ( { dispatch } ) => {
  let warn = console.log('warning, warning, warning');
  return (
    <View>
      <TextInput onChangeText={ (text) => dispatch.searchText(text) } />
    </View>
  );
}

SearchText = connect()(SearchText);

export default SearchText;
