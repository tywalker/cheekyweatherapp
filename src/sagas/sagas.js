import { call, put, fork, all, select, takeEvery } from 'redux-saga/effects'
import * as actions from '../actions'
//import { api } from '../services';
//const searchCityUrl = 'https://query.yahooapis.com/v1/public/yql?q=select%20name%2C%20country%20from%20geo.places%20where%20text%3D%22r*%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'

async function fetchCities(queryText) {
  console.log(queryText[0].cities.text)
  // if (typeof queryText !== 'undefined') {
  //   console.log(' query text not undefined ')
  //   queryText += '*'
  // }
  const url = `https://query.yahooapis.com/v1/public/yql?q=select%20name%2C%20country%20from%20geo.places%20where%20text%3D%22${queryText}%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`
  try {
    let response = await fetch(url)
    let payload = await response.json()
    console.log(payload.query.results)
    return payload.query.results;
  } catch(e) {
    console.log(e)
  }
}

export function* getCitiesBySearch() {
  const searchText = yield select()
  const cities = yield call(fetchCities, [searchText])
  yield put(actions.receiveCities(cities))
  console.warn(JSON.stringify(actions.receiveCities(cities)))
}

// watcher sagas
// spawns a new task on each action
export function* startUp() {
  yield takeEvery("GET_CITIES_BY_SEARCH", getCitiesBySearch)
}

export default function* rootSaga() {
  yield fork(startUp)
  yield fork(getCitiesBySearch)
}
