const realm = require('./schema')
const fs = require('fs');
const content = fs.readFileSync('./citiesbycountry.json');

let cities = realm.objects('City');

const addCitiesToRealm = content => {
  let parsedJson = JSON.parse(content);
  let city;
  realm.addListener('change', () => {
    console.log('realm updated');
  });

  parsedJson.forEach( index => {
    realm.write(() => {
      city = realm.create('City', {
        id: index.id,
        name: index.name,
        country: index.country,
        lon: index.coord.lon,
        lat: index.coord.lat,
      });
    });
    console.log('city ', index.id, ' seeded.')
  });
  // Unregister all listeners
  realm.removeAllListeners();
  console.log('operation finished');
}
if (cities.length === 0) {
  console.log('Db operation started');
  addCitiesToRealm(content);
} else {
  console.log(cities.length);
  realm.write(() => {
    realm.delete(cities);
  })
  console.log('cleared');
}

module.exports = realm;
