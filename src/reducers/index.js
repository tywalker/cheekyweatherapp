import { combineReducers } from 'redux';
import { addWeather, addCity, geoSuccess } from '../actions'

function cities(state = [], action) {
  switch (action.type) {
    case GET_SEARCH_TEXT:
      return {
        ...state,
        isFetching: true,
        text: action.text
      }
    case RECEIVE_CITIES:
      if (state.text && (typeof state.payload !== 'undefined' || state.payload !== null)) {
        return {
          ...state,
          isFetching: false,
          payload: action.cities
        }
      } else {
        return {
          ...state,
          payload: "no results"
        }
      }
      default:
        return state
  }
}

function geolocation(state = {coords: {}, fetching: true}, action) {
  switch (action.type) {
    case 'GEO_SUCCESS':
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

function forecasts(state = {coords: {}, fetching: true}, action) {
  switch (action.type) {
    case 'FORECAST_SUCCESS':
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

const rootReducer = combineReducers({
  geolocation
});

export default rootReducer
