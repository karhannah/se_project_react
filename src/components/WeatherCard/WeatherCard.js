import { weatherOptions } from "../../utils/Constants";
import "./WeatherCard.css";

const WeatherCard = ({ day = true, type = "Sunny", weatherTemp = "" }) => {
  const weatherOption = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });

  const imageSrcUrl = weatherOption[0].url || "";

  return (
    <section className="weather" id="weather">
      <div className="weather_info">{weatherTemp}°F</div>
      <img src={imageSrcUrl} className="weather_image" />
    </section>
  );
};

export default WeatherCard;
