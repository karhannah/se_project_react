const weatherOptions = [
  //day images
  { url: "/images/day/WeatherSunny", day: true, type: "Sunny" },
  { url: "/images/day/WeatherCloudy.svg", day: true, type: "Cloudy" },
  { url: "/images/day/WeatherRain.svg", day: true, type: "Raining" },
  { url: "/images/day/WeatherStorm.svg", day: true, type: "Storming" },
  { url: "/images/day/WeatherFog.svg", day: true, type: "Foggy" },
  { url: "/images/day/WeatherSnow.svg", day: true, type: "Snowy" },
  // Night images
  {
    url: "/images/night/WeatherNightFullMoon.svg",
    day: false,
    type: "Moon",
  },
  {
    url: "/images/night/WeatherNightMoonCloudy.svg",
    day: false,
    type: "Cloudy Night",
  },
  {
    url: "/images/night/WeatherNightRain.svg",
    day: false,
    type: "Rainy Night",
  },
  {
    url: "/images/night/WeatherNightSnow.svg",
    day: false,
    type: "Snowy Night",
  },
  {
    url: "/images/night/WeatherNightFog.svg",
    day: false,
    type: "Foggy Night",
  },
  {
    url: "/images/night/weatherNightStorm",
    day: false,
    type: "Stormy Night",
  },
];

const WeatherCard = ({ day, type }) => {
  console.log("weather card");
  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });
  console.log(imageSrc);
  console.log(imageSrc[0].url);

  const imageSrcUrl = imageSrc[0].url || "";
  return (
    <section className="weather" id="weather">
      <div className="weather_info">65F</div>
      <img src={imageSrcUrl} className="weather_image" />
    </section>
  );
};

export default WeatherCard;
