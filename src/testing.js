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

let forecasts = [{ condition: 0 }, { condition: 1 }, { condition: 2}];
console.log(forecasts);

let forecastsMinusOne = forecasts.filter( (forecast, index) => index !== 0 );
console.log(forecastsMinusOne);

let stateAltered = [Object.assign({}, forecasts, forecastsMinusOne)];
console.log(stateAltered);
