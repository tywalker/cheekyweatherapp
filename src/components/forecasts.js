/**
 *
 * <Forecasts />
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import ShowForecast from '../containers/showforecast';

const Forecasts = ( props ) => {
  return (
    <View>
      <ShowForecast />
    </View>
  )
}

export default Forecasts;
