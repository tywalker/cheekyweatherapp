import React, { Component } from 'react';
import {
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';

import { connect } from 'react-redux'
import SearchCities from './SearchCities'
import ShowForecast from './ShowForecast'
import { viewHandler } from '../actions'

class AppContainer extends Component {
  constructor() {
    super()

    this._handleViewChange = this._handleViewChange.bind(this)
  }

  _handleViewChange(view) {
    console.log('fired')
    const { dispatch } = this.props
    dispatch(viewHandler(view))
  }

  render() {
    const { view } = this.props
    let renderView

    if (view === 'search') {
      renderView = <SearchCities handleViewChange={ this._handleViewChange } />
    } else {
      renderView = <ShowForecast handleViewChange={ this._handleViewChange } />
    }
    return (
      <View style={{ height: '100%', width: '100%', backgroundColor: '#eee' }}>
         <Text>Welcome to my weather app.</Text>
        { renderView }
     </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    view: state.views.view
  }
}

export default connect(mapStateToProps)(AppContainer);
