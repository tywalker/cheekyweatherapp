export const addForecast = text => {
  return {
    type: 'ADD_FORECAST',
    text
  }
}

export const showForecast = index => {
  return {
    type: 'SHOW_FORECAST',
    index
  }
}

export const removeForecast = index => {
  return {
    type: 'REMOVE_FORECAST',
    index
  }
}

export const addCity = text => {
  return {
    type: 'ADD_CITY',
    text
  }
}

export const geoFetch = (coords) => {
  return {
    type: 'GEO_SUCCCESS',
    fetching: true,
    coords
  }
}

export function geoSuccess() {
  return function(dispatch) {
    return navigator.geolocation.getCurrentPosition(position => dispatch(geoFetch(position.coords)));
  }
}

export const searchText = text => {
  return {
    type: 'SEARCH_TEXT',
    text
  }
}
