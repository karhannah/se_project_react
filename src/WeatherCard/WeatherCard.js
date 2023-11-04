import "./WeatherCard.css";
const weatherOptions = [
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

const WeatherCard = ({ day = true, type = "Sunny", weatherTemp = 0 }) => {
  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });

  const imageSrcUrl = imageSrc[0].url || "";

  return (
    <section className="weather" id="weather">
      <div className="weather_info">{weatherTemp}</div>
      <img src={imageSrcUrl} className="weather_image" />
    </section>
  );
};

export default WeatherCard;
