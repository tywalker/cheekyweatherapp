export const GET_SEARCH_TEXT = 'GET_SEARCH_TEXT'
export const GET_CITIES_BY_SEARCH = 'GET_CITIES_BY_SEARCH'
export const RECEIVE_CITIES = 'RECEIVE_CITIES'
export const ADD_CITY = 'ADD_CITY'
export const GEO_FETCH = 'GEO_FETCH'
export const GEO_SUCCESS = 'GEO_SUCCESS'
export const FORECAST_FETCH = 'FORECAST_FETCH'
export const FORECAST_SUCCESS = 'FORECAST_SUCCESS'


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

export function addCity(city) {
  return {
    type: ADD_CITY,
    city
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

export function geoFetch() {
  return function(dispatch) {
    return navigator.geolocation.getCurrentPosition(position => dispatch(geoSuccess(position.coords)));
  }
}

export function forecastFetch() {
  return function(dispatch, getState) {
    const state = getState()
    if (!state.geolocation.fetching) {
      console.log(state)
      let lat = state.geolocation.coords.latitude;
      let lon = state.geolocation.coords.longitude;
      //const searchCityUrl = `api.openweathermap.org/data/2.5/find?q=${city}&type=like&mode=xmlq=&appid=a8b071b027a6f5c5f2da92477aac2b63`
      const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a8b071b027a6f5c5f2da92477aac2b63`
      return fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          dispatch(forecastSuccess(responseJson));
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (!state.forecasts.fetching){
      console.warn('fetching is not true for forecasts')
    }
    else {
      console.warn('fetching is true for geo')
    }

  }
}
