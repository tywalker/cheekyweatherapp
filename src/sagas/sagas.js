import { channel } from 'redux-saga'
import { call, put, fork, all, take, spawn, select, takeEvery, takeLatest } from 'redux-saga/effects'
import * as actions from '../actions'

export const locationChannel = channel();

export function* watchLocationChannel() {
  while (true) {
    const position = yield take(locationChannel)
    yield put(position)
  }
}

async function fetchCities(queryText) {
  let text = queryText[0].cities.text
  if (typeof text !== 'undefined') {
    text += '*'
  }
  const url = `https://query.yahooapis.com/v1/public/yql?q=select%20name%2C%20country%20from%20geo.places%20where%20text%3D%22${text}%22%20%7C%20unique(field%3D%22name%22%2C%20hideRepeatCount%3D%22true%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`
  try {
    let response = await fetch(url)
    let payload = await response.json()
    return payload.query.results;
  } catch(e) {
    let payload = 'null';
    return payload;
  }
}

export function* getCitiesBySearch() {
  const searchText = yield select()
  const cities = yield call(fetchCities, [searchText])
  yield put(actions.receiveCities(cities))
}

export function* getCurrentPosition() {
  locationChannel.put(actions.fetchGeoCoords)
  navigator.geolocation.getCurrentPosition( position => {
      console.log('does this even work', position)
      locationChannel.put(actions.receiveGeoCoords('check echek check'))
    }
  );
}
export function* fetchGeoCoords() {
  yield call(getCurrentPosition)
}

export function* startUp() {
  yield takeEvery("GET_CITIES_BY_SEARCH", getCitiesBySearch)
  yield takeEvery("FETCH_GEO_COORDS", fetchGeoCoords)
}

export default function* rootSaga() {
  yield fork(startUp)
  yield fork(getCitiesBySearch)
  yield fork(fetchGeoCoords)
  yield fork(watchLocationChannel)
}
