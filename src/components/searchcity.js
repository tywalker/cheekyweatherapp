/**
 *
 * <SearchCity cityData={ cityData } />
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import Cities from '../containers/index';

const SearchCity = ( props ) => {
  return (
    <View>
      <Cities />
    </View>
  )
}

export default SearchCity;
