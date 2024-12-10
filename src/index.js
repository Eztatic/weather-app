import './style.css';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

const APIKey = '5YQ43Q8F29YCE4N6Z4DVAWAY9';
let location = 'Tokyo';

document.querySelector('#search').addEventListener('click', function () {
  searchWeather();
});

document.querySelector('#location').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    searchWeather();
  }
});

function searchWeather() {
  toggleLoader();
  location = document.querySelector('#location').value;
  presentWeather();
}

function generateHr(dayData) {
  const startHour = 6;
  const step = 3;
  const totalHours = 6;

  for (let i = 0; i < totalHours; i++) {
    const hourData = dayData.hours[startHour + i * step];
    hourlyForecast(hourData.datetime, hourData.icon, hourData.temp);
  }
  document.querySelector('.hourly > div > div:last-child').remove();
}

function generateDays(days) {
  days.slice(0, 7).forEach((day) => {
    dailyForecast(
      day.datetime,
      day.icon,
      day.conditions,
      day.tempmax,
      day.tempmin,
    );
  });
}

const presentData = (data) => {
  reset();

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

  generateHr(data.days[0]);

  generateDays(data.days);
};

const presentWeather = () => {
  getWeather()
    .then(function (data) {
      presentData(data);
    })
    .catch(() => {
      if (location === '') {
        alert('Search Bar Empty');
      } else {
        alert('Location not found');
      }
    })
    .finally(() => {
      toggleLoader();
    });
};

async function getWeather() {
  try {
    const weather = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=5YQ43Q8F29YCE4N6Z4DVAWAY9&contentType=json`,
      {mode: 'cors'},
    );
    if (!weather.ok) {
      throw new Error(`HTTP error! status: ${weather.status}`);
    }
    const weatherData = await weather.json();
    return weatherData;
  } catch (error) {
    return Promise.reject(error);
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

const hourlyForecast = (hour, img, temp) => {
  const hours = document.querySelector('.hourly > div');
  const newHour = document.createElement('div');
  const time = document.createElement('p');
  const icon = document.createElement('img');
  const temperature = document.createElement('p');
  const separator = document.createElement('div');

  newHour.classList.add('hourly-container');
  time.classList.add('time');
  temperature.classList.add('temperature');
  separator.classList.add('vertical-line');

  icon.setAttribute('src', `./icons/${img}.png`);
  icon.setAttribute('alt', 'icon');

  dayjs.extend(customParseFormat);
  time.innerText = dayjs(hour, 'HH:mm:ss').format('h:mm A');
  temperature.innerText = `${temp}°C`;

  newHour.appendChild(time);
  newHour.appendChild(icon);
  newHour.appendChild(temperature);
  hours.appendChild(newHour);
  hours.appendChild(separator);
};

const dailyForecast = (day, img, conditions, maxTemp, minTemp) => {
  const days = document.querySelector('aside');
  const dayContainer = document.createElement('div');
  const date = document.createElement('p');
  const iconContainer = document.createElement('div');
  const icon = document.createElement('img');
  const label = document.createElement('p');
  const temperature = document.createElement('p');
  const isToday = dayjs(day).isSame(dayjs(), 'day');

  dayContainer.classList.add('day');
  date.classList.add('date');
  label.classList.add('label');
  temperature.classList.add('temp');

  icon.setAttribute('src', `./icons/${img}.png`);
  icon.setAttribute('alt', 'icon');

  date.innerText = isToday ? 'Today' : dayjs(day, 'YYYY/MM/DD').format('dddd');
  label.innerText = conditions;
  temperature.innerText = `${maxTemp}/${minTemp}`;

  iconContainer.appendChild(icon);
  iconContainer.appendChild(label);
  dayContainer.appendChild(date);
  dayContainer.appendChild(iconContainer);
  dayContainer.appendChild(temperature);
  days.appendChild(dayContainer);
};

const toggleLoader = () => {
  const loader = document.querySelector('.loader-container');
  loader.classList.toggle('loader-hidden');
};

const reset = () => {
  document.querySelector('.hourly > div').innerText = '';
  const day = document.querySelector('aside');
  const label = document.createElement('p');
  day.innerText = '';
  label.innerText = '7-Day Forecast';
  day.appendChild(label);
};

(function () {
  presentWeather();
})();
