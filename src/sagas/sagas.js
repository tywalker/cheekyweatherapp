import { call, put, fork, all, select, takeEvery } from 'redux-saga/effects'
import * as actions from '../actions'

async function fetchCities(queryText) {
  let text = queryText[0].cities.text
  if (typeof text !== 'undefined') {
    console.log(' query text not undefined ')
    text += '*'
  }
  //const url = `https://query.yahooapis.com/v1/public/yql?q=select%20name%2C%20country%20from%20geo.places%20where%20text%3D%22${text}%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`
  const url = `https://query.yahooapis.com/v1/public/yql?q=select%20name%2C%20country%20from%20geo.places%20where%20text%3D%22${text}%22%20%7C%20unique(field%3D%22name%22%2C%20hideRepeatCount%3D%22true%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`
  try {
    let response = await fetch(url)
    let payload = await response.json()
    return payload.query.results;
  } catch(e) {
    console.log(e)
  }
}

export function* getCitiesBySearch() {
  const searchText = yield select()
  const cities = yield call(fetchCities, [searchText])
  yield put(actions.receiveCities(cities))
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
