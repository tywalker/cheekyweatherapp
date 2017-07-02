const realm = require('./schema')
const citiesObj = realm.objects('City');
const citiesSorted = citiesObj.sorted('name');
console.log(citiesSorted);
let payload = {
  city: 'Raleigh'
};
let cityOfRaleigh = citiesSorted.filtered(`name = "${payload.city}"`);

let data = {
  cities: citiesSorted.filtered(`name = "${payload.city}"`)

}
console.log(data.cities);
