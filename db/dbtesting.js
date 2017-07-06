const realm = require('./schema')
const citiesObj = realm.objects('City');
const citiesSorted = citiesObj.sorted('name');
let payload = {
  city: 'Raleigh'
};
let cityOfRaleigh = citiesSorted.filtered(`name = "${payload.city}"`);

let data = {
  cities: citiesSorted.filtered(`name = "${payload.city}"`)

}
