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
// const searchCityUrl = `api.openweathermap.org/data/2.5/find?q=${city}&type=like&mode=xmlq=&appid=a8b071b027a6f5c5f2da92477aac2b63`
// const _fetchCities = (url) => {
//   return fetch(url)
//     .then((response) => response.json())
//     .then((responseJson) => {
//       return responseJson.cities;
//     })
//     .catch((error) => {
//       console.console.warn();(error);
//     });
// }
//
// console.log(_fetchCities(searchCityUrl));

// let forecasts = [{ condition: 0 }, { condition: 1 }, { condition: 2}];
// console.log(forecasts);
//
// let forecastsMinusOne = forecasts.filter( (forecast, index) => index !== 0 );
// console.log(forecastsMinusOne);
//
// let stateAltered = [Object.assign({}, forecasts, forecastsMinusOne)];
// console.log(stateAltered);


let searchText = [{ searchText: '' }];
let addText = [{ searchText: 'tyl' }];
let removeText = [{ removeText: 't' }];

let finalText = [Object.assign({}, searchText)]


console.log(finalText);

let finalTextAdd = [Object.assign({}, finalText, addText)]

console.log(finalTextAdd);

let finalTextRemove = [Object.assign({}, finalTextAdd, removeText)];

console.log(finalTextRemove);
