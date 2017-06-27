import React, { Component } from 'react';
import { Text, TouchableNativeFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { removeForecast } from '../actions';

const ListForecasts = ({ condition }) => {
  <Text>{ condition }</Text>
}

const wrapForecasts = ({ forecasts, removeOnPress }) => {
  return (
    <View>
      { forecasts.map( (forecast, index) =>
        <Text key={ index } onPress={ () => removeOnPress(index) }>{ forecast.condition }</Text>
      )}
    </View>
  )
}

const getForecasts = ({ forecasts }) => {
  return forecasts;
}

const mapStateToProps = state => {
  console.log(state)
  return {
    forecasts: state.forecasts,
    testing: 'hello billy'
  }
}

const mapDispatchToProps = dispatch => {
  console.log('working')
  return {
    removeOnPress: id => { dispatch(removeForecast(id)) }
    //forecast: id => { dispatch(showForecast(id)) }
  }
}

const ForecastsList = connect(mapStateToProps, mapDispatchToProps)(wrapForecasts);

export default ForecastsList;
