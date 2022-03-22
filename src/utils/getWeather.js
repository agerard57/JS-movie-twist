import { getUserData } from "/assets/scripts/utils/userDataStorage.js";

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
  const weather = document.querySelector("#weather");

  const storedUserCity = getUserData("city");
  const cityQuery = `q=${storedUserCity}`;

  // Transforms the input into a readable format
  const celcius = (temp) => Math.round(parseFloat(temp) - 273.15) + "°C";

  // Api URL vars
  const baseApiUrl = "https://api.openweathermap.org/data/2.5/weather";
  const apiKey = "******";

  // Geolocalisation functions
  const success = (pos) => {
    const coordinatesQuery = `lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`;
    fetch(`${baseApiUrl}?appid=${apiKey}&${coordinatesQuery}`)
      .then((resp) => resp.json())
      .then((data) => {
        weather.innerHTML = `${data.name}  ${celcius(data.main.temp)}`;
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
    fetch(`${baseApiUrl}?appid=${apiKey}&${cityQuery}`)
      .then((resp) => resp.json())
      .then((data) => {
        weather.innerHTML = `
        <img class="mx-auto d-block" src="http://openweathermap.org/img/wn/${
          data.weather[0].icon
        }.png" />
        <span class="nav-link text-muted text-center">${getUserData(
          "city"
        )}  ${celcius(data.main.temp)}</span>
        `;
      })
      .catch(() => {
        navigator.geolocation.getCurrentPosition(
          success,
          error,
          getLocationOptions
        );
      });
};

//TODO IF {cod: "404", message: "city not found"}
