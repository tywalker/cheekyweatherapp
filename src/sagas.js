import { call, put, takeEver, takeLatest} from 'redux-saga/effects';
import * as actions from './actions';
//import Api from '...'
// No API just this for now

const realm = require('../db/schema')
let citiesObj = realm.objects('City');
let citiesSorted = citiesObj.sorted('name');

const fetchCity = citiesSorted.filtered(`name = "Raleigh"`);

export function* sayHello() {
  yield put(actions.SAY_HELLO);
}

export function* queryCities() {
  try {
    const city = yield call(fetchCity, action.payload.id)
    yield put({ type: "FETCH_CITY_SUCCEEDED", city: city });
  } catch (e) {
    yield put({ type: "FETCH_CITY_FAILED", message: e.message })
  }
}

function* mySaga() {
  yield takeEvery("FETCH_CITY_REQUESTED", fetchUser)
}
