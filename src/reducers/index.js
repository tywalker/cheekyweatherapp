const realm = require('../../db/schema')
let citiesObj = realm.objects('City');
let citiesSorted = citiesObj.sorted('name');

import { combineReducers } from 'redux';
import { addWeather, addCity, SAY_HELLO } from '../actions'

export const forecasts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FORECAST':
      return [
        ...state,
        {
          condition: action.text,
        }
      ]
    case 'SHOW_FORECAST':
      return [
        ...state,
        {
          forecast: state.map(
            (forecast, index) => {
              if (index === action.index) {
                return forecast[index];
              }
            })
        }
      ]
    case 'REMOVE_FORECAST':
      state = state.filter( (forecast, index) => index !== action.index )
      return state;
    default:
      return state;
  }
}
export const cities = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CITY':
      return [
        ...state,
        {
          city: action.type
        }
      ]
    case 'SEARCH_TEXT':
      return Object.assign({}, state, {
        textToSearch: action.text,
      })
    case 'QUERY_CITIES':
      // using state.text we can create a action to query the cities
      return Object.assign({}, state, {
        payload: action.data,
      })
    case SAY_HELLO:
      alert('hello everyone')
    default:
      return state
  }
}

const weatherApp = combineReducers({
  forecasts,
  cities,
});

export default weatherApp
