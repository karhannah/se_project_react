import { defaultClothingItems } from "../Utils/Constants";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../Itemcard/ItemCard";
import "../Main/Main.css";

function Main({ weatherTemp, onSelectCard }) {
  return (
    <main className="main">
      <WeatherCard day={false} type="Moon" weatherTemp={weatherTemp} />
      <section id="card-section" className="card_section">
        <div>Today is {weatherTemp} / You may want to wear:</div>
        <div className="card_items">
          {defaultClothingItems.map((item) => (
            <ItemCard item={item} onSelectCard={onSelectCard} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
