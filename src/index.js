import './style.css';

const APIKey = '5YQ43Q8F29YCE4N6Z4DVAWAY9';
let location = 'Tokyo';

document.querySelector('#search').addEventListener('click', function () {
  location = document.querySelector('#location').value;
  getWeather().then(function (data) {
    console.log(data);
    currentWeather(
      data.address,
      data.currentConditions.precipprob,
      data.currentConditions.temp,
      data.currentConditions.icon,
      data.currentConditions.conditions,
    );

    airConditions(
      data.currentConditions.feelslike,
      data.currentConditions.windspeed,
      data.currentConditions.precip,
      data.currentConditions.uvindex,
    );
  });
});

async function getWeather() {
  try {
    const weather = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=5YQ43Q8F29YCE4N6Z4DVAWAY9&contentType=json`,
      {mode: 'cors'},
    );
    const weatherData = await weather.json();
    return weatherData;
  } catch (error) {
    console.error('Error with fetching data:', error);
  }
}

const currentWeather = (area, precip, temp, img, cond) => {
  const location = document.querySelector('.current .location');
  const rain = document.querySelector('.current .precipitation');
  const temperature = document.querySelector('.current .temperature');
  const icon = document.querySelector('.current img');
  const condition = document.querySelector('.current .icon-label');

  location.innerText = area;
  rain.innerText = `${precip}%`;
  temperature.innerText = `${temp}°C`;
  icon.setAttribute('src', `./icons/${img}.png`);
  condition.innerText = cond;
};

const airConditions = (temp, speed, chance, index) => {
  const temperature = document.querySelector('.real-feel .temperature');
  const windSpeed = document.querySelector('.wind .speed');
  const rain = document.querySelector('.rain .chance');
  const UV = document.querySelector('.uv-index .level');

  temperature.innerText = `${temp}°C`;
  windSpeed.innerText = `${speed} km/h`;
  rain.innerText = `${chance === null ? 0 : chance}%`;
  UV.innerText = index;
};
