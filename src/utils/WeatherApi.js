import { APIkey, latitude, longitude } from "./Constants";
import { processServerResponse } from "./Constants";

export const getWeatherAndLocation = () => {
  const Api = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then(processServerResponse);
  return Api;
};

export const parseWeatherData = (data) => {
  const main = data.main;
  const temperature = main && main.temp;
  return Math.ceil(temperature);
};

export const locationData = (data) => {
  return data.name;
};
