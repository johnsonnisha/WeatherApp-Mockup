function updateWeather(response) {
  let currentTemperature = document.querySelector("#current-temperature");
  let temperature = response.data.temperature.current;
  currentTemperature.innerHTML = Math.round(temperature);
  console.log(response.data.temperature.humidity);
  console.log(response.data.condition.description);
  let descriptionElement = document.querySelector("#weather-description");
  descriptionElement.innerHTML = response.data.condition.description;
  let humidityElement = document.querySelector("#humidity-section");
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
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
