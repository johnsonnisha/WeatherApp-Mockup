function showCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-search-input");
  let cityElement = document.querySelector("#current-city");
  let currentCity = searchInput.value;
  cityElement.innerHTML = currentCity;
}
let searchElement = document.querySelector("#city-search");
searchElement.addEventListener("submit", showCity);
