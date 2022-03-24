import { getUserData } from "/assets/scripts/utils/index.js";

/**
 * Displays the city and the temperature (in celcius) of the user.
 *
 * This function looks for the users city stored : if there is one, it gets from OpenWeather's API the temperature and the city in UpperCase.
 *
 * If there isn't any city stored, it asks for the user to turn on the browser's localisation feature to locate the user.
 *
 * Otherwise, it simply hides the feature.
 *
 * @module utils
 * @return {void}                 Depending on que "remember" query, either store in localStorage or in SessionStorage.
 */

export const getWeather = () => {
  // POST that gets the weather infos
  const postWeather = (queryString) =>
    fetch("/data/weather", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: queryString,
      }),
    }).then((response) => response.json());

  const weather = document.querySelector("#weather");

  const storedUserCity = getUserData("city");
  const cityQuery = `q=${storedUserCity}`;

  const weatherDisplay = (data) => `
        <img class="mx-auto d-block" src="http://openweathermap.org/img/wn/${
          data.weather[0].icon
        }.png" />
        <span class="nav-link text-muted text-center">${data.name}  ${celcius(
    data.main.temp
  )}</span>`;

  // Transforms the input into a readable format (in °C)
  const celcius = (temp) => Math.round(parseFloat(temp) - 273.15) + "°C";

  // Geolocalisation functions
  const success = (pos) => {
    const coordinatesQuery = `lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`;
    postWeather(coordinatesQuery)
      .then((data) => {
        weather.innerHTML = weatherDisplay(data);
      })
      .catch(() => {
        weather.style.display = "none";
      });
  };
  const error = () => (weather.style.display = "none");
  const getLocationOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  // Start of the "main part" of the function
  if (storedUserCity !== null)
    postWeather(cityQuery)
      .then((data) => (weather.innerHTML = weatherDisplay(data)))
      .catch(() => {
        navigator.geolocation.getCurrentPosition(
          success,
          error,
          getLocationOptions
        );
      });
};
