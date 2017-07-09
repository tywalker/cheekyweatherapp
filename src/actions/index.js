export const GET_SEARCH_TEXT = 'GET_SEARCH_TEXT'
export const GET_CITIES_BY_SEARCH = 'GET_CITIES_BY_SEARCH'
export const RECEIVE_CITIES = 'RECEIVE_CITIES'
export const ADD_CITY = 'ADD_CITY'
export const GEO_SUCCESS = 'GEO_SUCCCESS'
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

export const geoFetch = coords => {
  return {
    type: GEO_SUCCESS,
    fetching: true,
    coords
  }
}

export const forecastFetch = forecast => {
  return {
    type: FORECAST_SUCCESS,
    fetching: true,
    forecast
  }
}

export function geoSuccess() {
  return function(dispatch) {
    return navigator.geolocation.getCurrentPosition(position => dispatch(geoFetch(position.coords)));
  }
}

export function forecastSuccess() {
  return function(dispatch, getState) {
    const state = getState()
    if (!state.geolocation.fetching) {
      let lat = state.geolocation[0].coords.latitude;
      let lon = state.geolocation[0].coords.longitude;
    console.log(typeof lat)
      //const searchCityUrl = `api.openweathermap.org/data/2.5/find?q=${city}&type=like&mode=xmlq=&appid=a8b071b027a6f5c5f2da92477aac2b63`
      const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a8b071b027a6f5c5f2da92477aac2b63`
      return fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          dispatch(forecastFetch(responseJson));
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.warn('fetching is true')
    }

  }
}
