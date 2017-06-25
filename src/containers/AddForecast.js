import React, { Component } from 'react';
import { Text, TouchableNativeFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { addForecast } from '../actions/index';

let AddForecast = ( { dispatch } ) => {
  let addForecast = dispatch(addForecast("A beautiful fuckin day son."));
  let warn = console.log('warning, warning, warning');
  return (
    <TouchableNativeFeedback onPress={ () => addForecast }>
      <View style={ { width: '100%', height: 50, backgroundColor: '#eee' } }>
        <Text>Press Me to Add Weather</Text>
      </View>
    </TouchableNativeFeedback>
  );
}

AddForecast = connect()(AddForecast)

export default AddForecast;
