import { combineReducers } from 'redux';
import { addWeather, addCity  } from '../actions'
import {
  VIEW_HANDLER,
  GET_SEARCH_TEXT,
  CITIES_SUCCESS,
  CITIES_REQUEST,
  CITIES_FAILURE,
  ADD_CITY_SUCCESS
} from '../actions'

function views(state= { view: 'forecast' }, action) {
  switch (action.type) {
    case VIEW_HANDLER:
      console.log(action.view)
      return {
        ...state,
        animating: false,
        view: action.view,
      }
    default:
      return state
  }
}

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
    case ADD_CITY_SUCCESS:
      return state
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
  views,
  cities,
  geolocation,
  forecasts
});

export default rootReducer
