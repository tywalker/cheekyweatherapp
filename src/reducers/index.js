import { combineReducers } from 'redux';
import { addWeather, addCity  } from '../actions'
import { GET_SEARCH_TEXT, CITIES_FETCH, CITIES_SUCCESS, CITIES_REQUEST, CITIES_FAILURE } from '../actions'

function cities(state = { text: 'Enter Some Text', success: true, fetching: false, payload: [] }, action) {
  switch (action.type) {
    case GET_SEARCH_TEXT:
      return {
        ...state,
        text: action.text
      }
    case CITIES_REQUEST:
      return {
        ...state,
        fetching: true,
      }
    case CITIES_FAILURE:
      return {
        ...state,
        success: false,
        fetching: false,
        payload: "No Results" ,
      }
    case CITIES_SUCCESS:
      return {
        ...state,
        success: true,
        fetching: false,
        payload: action.payload,
      }
    default:
      return state
  }
}

function geolocation(state = {coords: {}, fetching: true}, action) {
  switch (action.type) {
    case 'GEO_FETCH':
      return {
          coords: action.coords,
          fetching: false,
        }
    default:
      return state;
  }
}

function forecasts(state = {forecast: {}, fetching: true}, action) {
  switch (action.type) {
    case 'FORECAST_FETCH':
      return {
          forecast: action.forecast,
          fetching: false
        }
    default:
      return state;
  }
}
const rootReducer = combineReducers({
  cities,
  geolocation,
  forecasts
});

export default rootReducer
