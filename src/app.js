function updateWeather(response) {
  let currentTemperature = document.querySelector("#current-temperature");
  let temperature = response.data.temperature.current;
  currentTemperature.innerHTML = `${Math.round(temperature)}°C`;
  console.log(response.data);

  let descriptionElement = document.querySelector("#weather-description");
  descriptionElement.innerHTML = response.data.condition.description;

  let humidityElement = document.querySelector("#humidity-section");
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;

  let windspeedElement = document.querySelector("#windspeed");
  windspeedElement.innerHTML = `${response.data.wind.speed}km/h`;

  let timeElement = document.querySelector("#time-section");
  let date = new Date(response.data.time * 1000);
  timeElement.innerHTML = formatDate(date);
}
function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let time = `${hours}:${minutes}`;
  let days = [
    `Sunday`,
    `Monday`,
    `Tuesday`,
    `Wednesday`,
    `Thursday`,
    `Friday`,
    `Saturday`,
  ];
  let day = days[date.getDay()];
  return `${day} ${time}`;
}

function searchCity(city) {
  letapiKey = "e7bd4to1bb033ed3a0c4b3fbb020c051";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=e7bd4to1bb033ed3a0c4b3fbb020c051&units=metric`;
  axios.get(apiURL).then(updateWeather);
}

function showCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-search-input");
  let cityElement = document.querySelector("#current-city");
  let currentCity = searchInput.value;
  cityElement.innerHTML = currentCity;
  searchCity(searchInput.value);
}
let searchElement = document.querySelector("#city-search");
searchElement.addEventListener("submit", showCity);

searchCity("Paris");
