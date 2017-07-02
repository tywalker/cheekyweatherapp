import React, { Component } from 'react';
import {
  Text,
  TextInput,
  TouchableNativeFeedback,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { searchText, queryCities } from '../actions/index'

const SearchText = ( { searchText, cities, queryCities } ) => {
  let startTyping = text => {
    if (text) {
      queryCities(text);
    } else {
      return false;
    }
    //console.warn(queryText);
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
  console.warn(JSON.stringify(state));
  return {
    cities: state.cities
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchText: text => { dispatch(searchText(text)) },
    queryCities: text => { dispatch(queryCities(text)) }
  }
}

SearchText = connect(mapStateToProps, mapDispatchToProps)(SearchText);

export default SearchText;
