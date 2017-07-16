const realm = require('../../db/schema')
const cities = realm.objects('City');

const insertCity = (cityObj) => {
  let lastId = cities[cities.length-1].id
  realm.write(() => {
    realm.create('City', {
      id:  lastId + 1,
      name: cityObj.name,
      country: cityObj.country,
      lon: cityObj.lon,
      lat: cityObj.lat,
    })
  })
}

