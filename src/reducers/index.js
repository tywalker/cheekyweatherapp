import { combineReducers } from 'redux';
import { RECEIVE_CITIES, GET_SEARCH_TEXT, ADD_CITY } from '../actions'

function cities(state = { payload: [] }, action) {
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

function user(state = [], action) {
  switch (action.type) {
    case ADD_CITY:
      return {
        ...state,
        cities: action.city,
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  cities,
  user
});

export default rootReducer
