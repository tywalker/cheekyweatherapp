import { combineReducers } from 'redux';
import { addWeather, addCity, geoSuccess } from '../actions'

function geolocation(state = [], action) {
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

function geolocation(state = {coords: {}, fetching: true}, action) {
  switch (action.type) {
    case 'GEO_SUCCCESS':
      return [
        ...state,
        {
          coords: action.coords,
          fetching: false,
        }
      ]
    default:
      return state;
  }
}

const weatherApp = combineReducers({
  geolocation
});

export default weatherApp
