const realm = require('../../db/schema')
let citiesObj = realm.objects('City');
let citiesSorted = citiesObj.sorted('name');

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


export const queryCities = async (text) => {
//  let payload = citiesSorted.filtered(text);
  try {
    let data = await citiesSorted.filtered(`name = "Raleigh"`)
    return {
      type: 'QUERY_CITIES',
      data
    }
  } catch (err) {
    console.warn(err);
  }
}

export const displayCities = text => {
  return{
    type: 'DISPLAY_CITIES',
    text
  }
}
