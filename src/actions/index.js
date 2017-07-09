export const GET_SEARCH_TEXT = 'GET_SEARCH_TEXT'
export const GET_CITIES_BY_SEARCH = 'GET_CITIES_BY_SEARCH'
export const RECEIVE_CITIES = 'RECEIVE_CITIES'
export const ADD_CITY = 'ADD_CITY'
export const GEO_SUCCESS = 'GEO_SUCCCESS'
export const FORECAST_SUCCESS = 'FORECAST_SUCESS'


export const searchText = text => {
  return {
    type: 'SEARCH_TEXT',
    text
  }
}

export function getSearchText(text) {
  return {
    type: GET_SEARCH_TEXT,
    isFetching: true,
    text
  }
}

export function getCitiesBySearch() {
  return {
    type: GET_CITIES_BY_SEARCH
  }
}

export function receiveCities(cities) {
  return {
    type: RECEIVE_CITIES,
    isFetching: true,
    cities
  }
}

export const addCity = text => {
  return {
    type: ADD_CITY,
    text
  }
}

export const geoFetch = (coords) => {
  return {
    type: GEO_SUCCCESS,
    fetching: true,
    coords
  }
}

export function geoSuccess() {
  return function(dispatch) {
    return navigator.geolocation.getCurrentPosition(position => dispatch(geoFetch(position.coords)));
  }
}

export const forecastFetch = latLng = {
  return {
    type: FORECAST_SUCESS,
    fetching: true,
    latLng
  }
}

export function forecastSuccess() {
  return function(dispatch) {
    return true
  }
}
