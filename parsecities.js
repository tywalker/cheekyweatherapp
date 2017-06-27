var fs = require('fs');
var content = fs.readFileSync('./city.list.min.json');

var parsedJson;
var listBasedOnCountry;

function parseCities(json) {

  listBasedOnCountry = [];
  parsedJson = JSON.parse(json);
  console.log(parsedJson[0].country);
  parsedJson.forEach (obj => {
    if (obj.country === 'US') {
      listBasedOnCountry.push(obj);
    }
  });
  return JSON.stringify(listBasedOnCountry);
}

console.log(parseCities(content));
