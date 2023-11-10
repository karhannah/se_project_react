export const APIkey = "9dfcab643e58a2694dca1758a11cf0e1";
export const latitude = 43.038902;
export const longitude = -87.906471;

export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Winter coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];

export const weatherOptions = [
  {
    url: require("../images/day/WeatherSunny.svg").default,
    day: true,
    type: "Sunny",
  },
  {
    url: require("../images/day/WeatherCloudy.svg").default,
    day: true,
    type: "Cloudy",
  },
  {
    url: require("../images/day/WeatherRain.svg").default,
    day: true,
    type: "Raining",
  },
  {
    url: require("../images/day/WeatherStorm.svg").default,
    day: true,
    type: "Storming",
  },
  {
    url: require("../images/day/WeatherFog.svg").default,
    day: true,
    type: "Foggy",
  },
  {
    url: require("../images/day/WeatherSnow.svg").default,
    day: true,
    type: "Snowy",
  },

  {
    url: require("../images/night/WeatherNightFullMoon.svg").default,
    day: false,
    type: "Moon",
  },
  {
    url: require("../images/night/WeatherNightMoonCloudy.svg").default,
    day: false,
    type: "Cloudy Night",
  },
  {
    url: require("../images/night/WeatherNightRain.svg").default,
    day: false,
    type: "Rainy Night",
  },
  {
    url: require("../images/night/WeatherNightSnow.svg").default,
    day: false,
    type: "Snowy Night",
  },
  {
    url: require("../images/night/WeatherNightFog.svg").default,
    day: false,
    type: "Foggy Night",
  },
  {
    url: require("../images/night/WeatherNightStorm.svg").default,
    day: false,
    type: "Stormy Night",
  },
];

export const processServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};
