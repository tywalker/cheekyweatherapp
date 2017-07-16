import { isValidObj } from '../constants'
export const VIEW_HANDLER = 'VIEW_HANDLER'
export const ADD_CITY = 'ADD_CITY'
export const GEO_FETCH = 'GEO_FETCH'
export const GEO_SUCCESS = 'GEO_SUCCESS'
export const FORECAST_FETCH = 'FORECAST_FETCH'
export const FORECAST_SUCCESS = 'FORECAST_SUCCESS'
export const GET_SEARCH_TEXT = 'GET_SEARCH_TEXT'
export const CITIES_FETCH = 'CITIES_FETCH'
export const CITIES_REQUEST = 'CITIES_REQUEST'
export const CITIES_SUCCESS = 'CITIES_SUCCESS'
export const CITIES_FAILURE = 'CITIES_FAILURE'

export const viewHandler = view => {
  return {
    type: VIEW_HANDLER,
    animating: false,
    view
  }
}

export const geoSuccess = coords => {
  return {
    type: GEO_FETCH,
    fetching: true,
    coords
  }
}

export const forecastSuccess = forecast => {
  return {
    type: FORECAST_FETCH,
    fetching: true,
    forecast
  }
}

export const getSearchText = text => {
  return {
    type: GET_SEARCH_TEXT,
    text
  }
}

export const citiesRequest = () => {
  return {
    type: CITIES_REQUEST,
  }
}
export const citiesSuccess = payload => {
  return {
    type: CITIES_SUCCESS,
    fetching: false,
    payload
  }
}

export const citiesFailure = () => {
  return {
    type: CITIES_FAILURE,
    fetching: false,
  }
}

export function geoFetch() {
  return function(dispatch) {
    // gets phone gps coords
    return navigator.geolocation.getCurrentPosition(position => dispatch(geoSuccess(position.coords)));
  }
}

export function forecastFetch() {
  return function(dispatch, getState) {
    const state = getState()
    if (!state.geolocation.fetching) {
      let lat = state.geolocation.coords.latitude;
      let lon = state.geolocation.coords.longitude;

      // API call to openweathermap.org with lat and lng to get a single forecast.
      const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a8b071b027a6f5c5f2da92477aac2b63`
      return fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          dispatch(forecastSuccess(responseJson));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
}

export function citiesFetch(searchText) {
  return function(dispatch) {
    dispatch(citiesRequest())
      if (typeof searchText !== 'undefined') {
        searchText += '*'
      }
      // API call to Yahoo using their YQL syntax to receive a complete city list
      const url = `https://query.yahooapis.com/v1/public/yql?q=select%20name%2C%20admin1%2C%20country%20from%20geo.places%20where%20text%3D%22${searchText}%22%20%7C%20unique(field%3D%22name%22%2C%20hideRepeatCount%3D%22true%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`
      return fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          if (isValidObj(responseJson.query) && isValidObj(responseJson.query.results)) {
            dispatch(citiesSuccess(responseJson.query.results));
          } else {
            dispatch(citiesFailure())
          }
        })
        .catch((error) => {
          console.log(error)
        });
  }
}
