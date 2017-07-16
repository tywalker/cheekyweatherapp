import React from 'react';
import {
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import { isValidObj } from '../constants'

const CityItem = ( props ) => {
  const { name, code, country} = props.item
  return (
    <View style={{height: 35, width: '100%', borderBottomWidth: 1, marginTop: 25}}>
      <TouchableNativeFeedback style={{width: '100%', height: 35, paddingTop: 25} }
                               onPress={ () => console.warn('add city') }>
        <Text>{ name }{ isValidObj(code) ? `, ${code}` : '' }{ isValidObj(country.code) && !isValidObj(code) ? `, ${country.code}` : '' }</Text>
      </TouchableNativeFeedback>
    </View>
  );
}

export default CityItem