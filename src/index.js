import './style.css';

// const APIKey = '5YQ43Q8F29YCE4N6Z4DVAWAY9';
// let location = 'Tokyo';

// document.querySelector('#search').addEventListener('click', function () {
//   location = document.querySelector('#location').value;
//   getWeather().then(function (data) {
//     console.log(data.days[0].icon);
//   });
// });

// async function getWeather() {
//   try {
//     const weather = await fetch(
//       `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&elements=datetime%2Cname%2CresolvedAddress%2Ctemp%2Cconditions%2Cdescription%2Cicon&include=days%2Chours%2Cevents&key=5YQ43Q8F29YCE4N6Z4DVAWAY9&contentType=json`,
//       {mode: 'cors'},
//     );
//     const weatherData = await weather.json();
//     return weatherData;
//   } catch (error) {
//     console.error('Error with fetching data:', error);
//   }
// }
