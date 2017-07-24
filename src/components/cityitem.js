import React from 'react';
import {
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import { isValidObj, isValidChildObj } from '../constants'

const CityItem = ( props ) => {
  const { name } = props.item
  const { country } = props.country
  return (
    <View style={{height: 35, width: '100%', borderBottomWidth: 1, marginTop: 25}}>
      <TouchableNativeFeedback style={{width: '100%', height: 35, paddingTop: 25} }>
        <Text>{ name ? name : 'No Results' }{ country ? `, ${country}` : ''}</Text>
      </TouchableNativeFeedback>
    </View>
  );
}

export default CityItem