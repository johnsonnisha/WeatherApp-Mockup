function updateWeather(response) {
  console.log(response.data);
  console.log(response.data.temperature.current);
}

function searchCity(city) {
  letapiKey = "e7bd4to1bb033ed3a0c4b3fbb020c051";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=e7bd4to1bb033ed3a0c4b3fbb020c051&units=metric`;
  axios.get(apiURL).then(updateWeather);
  console.log(apiURL);
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
