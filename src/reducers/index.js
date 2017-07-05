import { combineReducers } from 'redux';
import { RECEIVE_CITIES } from '../actions'

function cities(state = { cities: [] }, action) {
  switch (action.type) {
    case RECEIVE_CITIES:
      return {
        ...state,
        cities: action.cities
        }
      default:
        return state
  }
}

const rootReducer = combineReducers({
  cities,
});

export default rootReducer
