export const GET_ALL_CITIES = 'GET_ALL_CITIES'
export const RECEIVE_CITIES = 'RECEIVE_CITIES'


export function getAllCities() {
  return {
    type: GET_ALL_CITIES
  }
}

export function receiveCities(cities) {
  return {
    type: RECEIVE_CITIES,
    cities
  }
}
