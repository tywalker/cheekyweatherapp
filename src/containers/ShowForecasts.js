import React, { Component } from 'react';
import { Text, TouchableNativeFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { showForecast } from '../actions';

import App from '../components/app';

const ListForecasts = ({ condition }) => {
  <Text>{ condition }</Text>
}

const wrapForecasts = ({ forecasts, testing, forecast }) => {
  return (
    <View>
      { forecasts.map( (forecast, index) =>
        <Text key={ index }>{ forecast.condition }</Text>
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
  return {
    forecast: id => { dispatch(showForecast(id)) }
  }
}

const ForecastsList = connect(mapStateToProps)(wrapForecasts);

export default ForecastsList;
