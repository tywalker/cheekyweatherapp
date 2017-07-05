import { call, put, fork, all, takeEvery } from 'redux-saga/effects'
import * as actions from '../actions'
//import { api } from '../services';
//const searchCityUrl = 'https://query.yahooapis.com/v1/public/yql?q=select%20name%2C%20country%20from%20geo.places%20where%20text%3D%22r*%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'

async function fetchCities() {
  const url = 'https://query.yahooapis.com/v1/public/yql?q=select%20name%2C%20country%20from%20geo.places%20where%20text%3D%22r*%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'
  try {
    let response = await fetch(url)
    let payload = await response.json()
    return payload.query.results;
  } catch(e) {
    console.log(e)
  }
}

export function* getAllCities() {
  const cities = yield call(fetchCities)
  yield put(actions.receiveCities(cities))
  console.warn(JSON.stringify(actions.receiveCities(cities)))
}

// watcher sagas
// spawns a new task on each action
export function* startUp() {
  console.warn('huh?')
  yield takeEvery("GET_ALL_CITIES", getAllCities)
}

export default function* rootSaga() {
  yield fork(startUp)
  yield fork(getAllCities)
}
