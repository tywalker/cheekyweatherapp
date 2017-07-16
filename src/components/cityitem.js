import React from 'react';
import {
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import { isValidObj, isValidChildObj } from '../constants'

const CityItem = ( props ) => {
  let code

  if (isValidObj(props.item.admin1) && isValidObj(props.item.admin1.code)) {
    code = props.item.admin1.code
  } else if (isValidObj(props.item.country) && isValidObj(props.item.country.code)) {
    code = props.item.country.code
  }

  const { name } = props.item
  return (
    <View style={{height: 35, width: '100%', borderBottomWidth: 1, marginTop: 25}}>
      <TouchableNativeFeedback style={{width: '100%', height: 35, paddingTop: 25} }
                               onPress={ () => console.warn('add city') }>
        <Text>{ name ? name : 'No Results' }{ code ? `, ${code}` : ''}</Text>
      </TouchableNativeFeedback>
    </View>
  );
}

export default CityItem