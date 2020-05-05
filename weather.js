const weather = document.querySelector(".js-weather");

const API_KEY = "58d07c2d6dade6e696cf17aaf7951f56";
const COORDS = "coords";

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      return response.json(); // response 중 필요한 데이터만 json 으로 바꾼 후 진행하기 위해
    })
    .then(function (json) {
      // console.log(json);
      const temp = json.main.temp;
      const place = json.name;
      weather.innerText = `${temp} / ${place}`;
    });
}

function saveCoords(coords) {
  localStorage.setItem(COORDS, JSON.stringify(coords));
}
function handleGeoSuccess(position) {
  console.log(position);
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coords = {
    latitude,
    longitude,
  };

  saveCoords(coords);
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log("Can`t access geo location");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parsedCoords = JSON.parse(loadedCoords);
    // console.log(parseCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}
function init() {
  loadCoords();
}

init();
