import { APIkey, latitude, longitude } from "./Constants";

export const getWeatherAndLocation = () => {
  const API = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    const processServerResponse = (res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Error: ${res.status}`).then(
          processServerResponse
        );
      }
    };
  });
  return API;
};

export const parseWeatherData = (data) => {
  const main = data.main;
  const temperature = main && main.temp;
  return Math.ceil(temperature);
};

export const locationData = (data) => {
  return data.name;
};
