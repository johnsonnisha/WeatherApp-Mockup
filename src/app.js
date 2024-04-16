function showCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-search-input");
  let cityElement = document.querySelector("#current-city");
  let currentCity = searchInput.value;
  cityElement.innerHTML = currentCity;
}
let searchElement = document.querySelector("#city-search");
searchElement.addEventListener("submit", showCity);

letapiKey = "e7bd4to1bb033ed3a0c4b3fbb020c051";
letapiURL =
  "https://api.shecodes.io/weather/v1/current?query={query}&key={key}";
