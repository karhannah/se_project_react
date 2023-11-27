import { weatherOptions } from "../../utils/Constants";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";
import "./WeatherCard.css";

const WeatherCard = ({ day = true, type = "Sunny", weatherTemp = "" }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const weatherOption = weatherOptions.find((item) => {
    return item.day === day && item.type === type;
  });

  const imageSrcUrl = weatherOption.url || "";

  return (
    <section className="weather" id="weather">
      <div className="weather_info">
        {weatherTemp}°{currentTemperatureUnit}
      </div>
      <img src={imageSrcUrl} className="weather_image" />
    </section>
  );
};

export default WeatherCard;
