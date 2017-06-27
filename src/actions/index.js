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

export const searchText = text => {
  return {
    type: 'SEARCH_TEXT',
    text
  }
}

export const gimmeLogs = text => {
  return {
    type: 'GIMME_LOGS',
    text
  }
}
