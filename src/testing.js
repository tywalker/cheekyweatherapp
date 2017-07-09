require('isomorphic-fetch');
//
// const url = 'https://openweathermap.org/data/2.5/weather?id=4487042&units=imperial&appid=a8b071b027a6f5c5f2da92477aac2b63';
//
// const _fetchWeatherData = (url) => {
//   return fetch(this.state.url)
//     .then((response) => response.json())
//     .then((responseJson) => {
//       return responseJson.weathers;
//     })
//     .catch((error) => {
//       console.console.warn();(error);
//     });
// }
//
// console.log(_fetchWeatherData(url));

// let city = "Greenville";
const searchCityUrl = 'https://query.yahooapis.com/v1/public/yql?q=select%20name%2C%20country%20from%20geo.places%20where%20text%3D%22r*%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'
//const searchCityUrl = `api.openweathermap.org/data/2.5/find?q=${city}&type=like&mode=xmlq=&appid=a8b071b027a6f5c5f2da92477aac2b63`
const _fetchCities = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson.query.results);
    })
    .catch((error) => {
      console.log('something went wrong');
    });
}

 _fetchCities(searchCityUrl);

// let forecasts = [{ condition: 0 }, { condition: 1 }, { condition: 2}];
// console.log(forecasts);
//
// let forecastsMinusOne = forecasts.filter( (forecast, index) => index !== 0 );
// console.log(forecastsMinusOne);
//
// let stateAltered = [Object.assign({}, forecasts, forecastsMinusOne)];
// console.log(stateAltered);


// /*** YEHOOO WESTHER QUERY ****/
// 'select name, country from geo.places where text="ral*"'
// /*** WEATHER QUERY ****/
// 'https://query.yahooapis.com/v1/public/yql?q=select%20name%2C%20country%20from%20geo.places%20where%20text%3D%22ral*%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'

// let searchText = [{ searchText: '' }];
// let addText = [{ searchText: 'tyl' }];
// let removeText = [{ removeText: 't' }];
//
// let finalText = [Object.assign({}, searchText)]
//
//
// console.log(finalText);
//
// let finalTextAdd = [Object.assign({}, finalText, addText)]
//
// console.log(finalTextAdd);
//
// let finalTextRemove = [Object.assign({}, finalTextAdd, removeText)];
//
// console.log(finalTextRemove);
