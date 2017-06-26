import { combineReducers } from 'redux';
import { addWeather, addCity } from '../actions'

function forecasts(state = [], action) {
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
    console.log(state)
      return state.map((forecast, index) => {
        if (index === action.index) {
          return state.filter( index => index !== action.index );
        }
        return forecast
      })
    default:
      return state;
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
