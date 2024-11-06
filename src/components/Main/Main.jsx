import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import {defaultClothingItems} from "../../utils/constants";

function Main({ WeatherData }) {
    return (
        <main>
            <WeatherCard/>
            <section className="cards">
                <p className="cards__text">Today is 75 &deg; F / You may want to wear:</p>
                <ul className="cards__list">
                    {defaultClothingItems.filter((item) => {
                        return item.weather === WeatherData.type;
                    }).map((item) => {
                        return <ItemCard key={item._id} item={item} />;
                    })}
                </ul>
            </section>
        </main>
    );    
}

export default Main;