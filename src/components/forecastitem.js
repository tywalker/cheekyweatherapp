import React from 'react';
import {
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';

const ForecastItem = ( props ) => {
  return (
    <View>
      <Text>{ props.forecast.name }</Text>
      <Text>{ props.forecast.weather[0].description }</Text>
      <Text>{ props.forecast.main.temp }</Text>
    </View>
  );
}

export default ForecastItem
