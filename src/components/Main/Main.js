import { defaultClothingItems } from "../../utils/Constants";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";
import "./Main.css";

function Main({ weatherTemp, onSelectCard }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 85;
  console.log(currentTemperatureUnit);
  const getWeatherType = () => {
    if (temp >= 86) {
      return "hot";
    } else if (temp >= 66 && weatherTemp <= 85) {
      return "warm";
    } else if (temp <= 65) {
      return "cold";
    }
  };
  const weatherType = getWeatherType();

  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });
  return (
    <main className="main">
      <WeatherCard day={true} type="Cloudy" weatherTemp={temp} />
      <section id="card-section" className="card_section">
        <div>Today is {temp}°F/ You may want to wear:</div>
        <div className="card_items">
          {filteredCards.map((item) => (
            <ItemCard item={item} onSelectCard={onSelectCard} key={item._id} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
