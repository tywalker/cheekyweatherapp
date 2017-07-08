export const GET_SEARCH_TEXT = 'GET_SEARCH_TEXT'
export const GET_CITIES_BY_SEARCH = 'GET_CITIES_BY_SEARCH'
export const RECEIVE_CITIES = 'RECEIVE_CITIES'
export const ADD_CITY = 'ADD_CITY'
export const GET_GEO_COORDS = 'GET_GEO_COORDS'
export const FETCH_FORECAST = 'FETCH_FORECAST'
export const SHOW_FORECAST = 'SHOW_FORECAST'

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

export function addCity(city) {
  type: ADD_CITY,
  city
}

export function getGeoCoords(geoCoords) {
  type: GET_GEO_COORDS,
  geoCoords
}

export function fetchForecast(forecast) {
  type: FETCH_FORECAST,
  forecast
}

export function showForecast(geoLoc) {
  type: SHOW_FORECAST
}
