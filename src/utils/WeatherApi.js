import { APIkey, latitude, longitude } from "./Constants";
import { processServerResponse } from "./utils";

export const getWeatherAndLocation = () => {
  const Api = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then(processServerResponse);
  return Api;
};

export const parseWeatherData = (data) => {
  const main = data.main;
  console.log(data.main);
  const temperature = main && main.temp;
  const weather = {
    temperature: {
      F: `${Math.round(temperature)}°F`,
      C: `${Math.round(((temperature - 32) * 5) / 9)}°C`,
    },
  };
  return weather;
};

export const locationData = (data) => {
  return data.name;
};

// weather.temperature.F = `${Math.round(data.main.temp)}°F`;
// weather.temperature.C = `${Math.round((data.main.temp - 32) * 5/9)}°C`;
