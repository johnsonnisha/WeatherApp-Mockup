function showCity(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#current-city");
  let currentCity = searchElement.value;
  cityElement.innerHTML = currentCity;
  console.log(currentCity);
}
let searchElement = document.querySelector("#search-input");
searchElement.addEventListener("search", showCity);
console.log(searchElement);
