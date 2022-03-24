module.exports = (req, res) => {
  const fetch = require("cross-fetch");

  const openWeatherConfig = require("../config/openWeather.config");

  const locationQuery = req.body.query;
  const apiKey = openWeatherConfig.API_KEY;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&${locationQuery}`
  )
    .then((resp) => resp.json())
    .then((data) => {
      res.send(JSON.stringify(data));
    });
};
