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

import SearchText from '../containers/SearchText';

const SearchCity = ( props ) => {
  return (
    <View>
      <SearchText />
    </View>
  )
}

export default SearchCity;
