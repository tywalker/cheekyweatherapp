const realm = require('../../db/schema')

export const insertCity = (cityObj, country) => {
  let lastId = cities[cities.length-1].id
  console.log( cityObj, country, lastId)
  // realm.write(() => {
  //   realm.create('City', {
  //     id:  lastId + 1,
  //     name: cityObj.name,
  //     country: country,
  //     lon: cityObj.centroid.longitude,
  //     lat: cityObj.centroid.latitude,
  //   })
  // })
}

