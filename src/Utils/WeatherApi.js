import { APIkey } from "./Constants";
import { latitude } from "./Constants";
import { longitude } from "./Constants";

export const getWeather = () => {
  const weatherAPI = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    if (res.ok) {
      console.log(res);
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
  return weatherAPI;
};

export const parseWeatherData = (data) => {
  const main = data.main;
  const temperature = main && main.temp;
  return Math.ceil(temperature);
};

export const locationData = (data) => {
  const sys = data.sys;
  const country = sys && sys.country;
  return country;
};
