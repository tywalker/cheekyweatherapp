import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import AppContainer from './src/containers/AppContainer'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './src/reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(ReduxThunk)
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <AppContainer style={{ marginTop: 100 }}/>
      </Provider>
    )

  }
}
