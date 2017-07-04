import React, { Component } from 'react';
import { Text, TouchableNativeFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { addForecast } from '../actions/index';

let AddForecast = ( { dispatch } ) => {
  return (
    <View>
      <Text>This is the AddForecast continaer</Text>
      <TouchableNativeFeedback onPress={ () => dispatch(addForecast("A beautiful fuckin day son.")) }>
        <View style={ { width: '100%', height: 50, backgroundColor: '#eee' } }>
          <Text>Press Me to Add Weather</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

AddForecast = connect()(AddForecast)

export default AddForecast;
