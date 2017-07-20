const realm = require('./schema')
const citiesObj = realm.objects('City');
const citiesSorted = citiesObj.sorted('name');

console.log(citiesObj)

// function fetchCitiesDB(queryText) {
//   text = 'ra'
//   if (typeof text !== 'undefined') {
//     console.warn(' query text not undefined ')
//     //text += '*'
//   }
//   let response = citiesObj.filtered('name BEGINSWITH[c] $0', text);
//   console.log(response);
//   }
//
//   fetchCitiesDB('r')

// async function fetchCitiesDB(queryText) {
//   let text = queryText[0].cities.text
//   if (typeof text !== 'undefined') {
//     console.warn(' query text not undefined ')
//     text += '*'
//   }
//   try {
//     let response = await citiesObj.filtered(`name BEGINSWITH[c] "${text}"`)
//     console.log(JSON.stringify(response))
//     let payload = await response
//     return payload;
//   } catch(e) {
//     console.warn(e)
//   }
// }
