import { combineReducers } from 'redux';
import { addWeather, addCity, geoSuccess } from '../actions'

function geolocation(state = [], action) {
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

export default rootReducer
