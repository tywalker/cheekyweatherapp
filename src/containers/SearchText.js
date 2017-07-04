import React, { Component } from 'react';
import {
  Text,
  TextInput,
  TouchableNativeFeedback,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { searchText, sayHello } from '../actions/index'

import createSagaMiddleware from 'redux-saga';

const SearchText = ( { searchText, cities, sayHello } ) => {
  let startTyping = text => {
    if (text) {
      sayHello();
    } else {
      return false;
    }
    timeTextChange = setTimeout(startTyping, 400);
  };

  let resetTimer = function(text) {
    clearTimeout(window.timeTextChange);
    timeTextChange = setTimeout( () => { startTyping(text) }, 400);
  };

  const initTimer = () => {
    timeTextChange = setTimeout( () => { startTyping() }, 400);
  }

  return (
    <View>
      <TextInput onChangeText={ text => resetTimer(text) }
                 onSubmitEditing={ () => { true } }
                 editable={ true }
                 onFocus={ () => initTimer() }/>
      <TouchableNativeFeedback onPress={ () => searchText('example') }>
        <Text>Press Me</Text>
      </TouchableNativeFeedback>
      <Text>{ cities.textToSearch }</Text>
    </View>
  );
}

const mapStateToProps = state => {
  return {
    cities: state.cities
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchText: text => { dispatch(searchText(text)) },
    sayHello: () => { dispatch(sayHello()) }
  }
}

SearchText = connect(mapStateToProps, mapDispatchToProps)(SearchText);

export default SearchText;
