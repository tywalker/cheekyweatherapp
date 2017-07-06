import { combineReducers } from 'redux';
import { RECEIVE_CITIES, GET_SEARCH_TEXT } from '../actions'

function cities(state = { cities: [] }, action) {
  switch (action.type) {
    case GET_SEARCH_TEXT:
      return {
        ...state,
        isFetching: true,
        text: action.text
      }
    case RECEIVE_CITIES:
      if (state.text) {
        return {
          ...state,
          isFetching: false,
          payload: action.cities
        }
      } else {
        return {
          ...state,
          payload: action.cities
        }
      }
      default:
        return state
  }
}

const rootReducer = combineReducers({
  cities,
});

export default rootReducer
