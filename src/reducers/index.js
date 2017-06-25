import { combineReducers } from 'redux';
import { addWeather, addCity } from '../actions'

const forecasts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FORECAST':
      return [
        ...state,
        {
          condition: action.type
        }
      ]
    default:
      return state
  }
}
const cities = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CITY':
      return [
        ...state,
        {
          city: action.type
        }
      ]
    default:
      return state
  }
}

const weatherApp = combineReducers({
  forecasts,
  cities
});

export default weatherApp
