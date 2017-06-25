export const addForecast = text => {
  return {
    type: 'ADD_FORECAST',
    text
  }
}

export const showForecasts = index => {
  return {
    type: 'SHOW_FORECASTS',
    index
  }
}

export const addCity = text => {
  return {
    type: 'ADD_CITY',
    text
  }
}
