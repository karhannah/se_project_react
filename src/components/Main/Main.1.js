import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { useContext, useEffect } from "react";

export async function Main({ weatherTemp, onSelectCard, setClothingItems }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 85;
  const getWeatherType = () => {
    if (currentTemperatureUnit === "F") {
      if (temp >= 86) {
        return "hot";
      } else if (temp >= 66 && temp <= 85) {
        return "warm";
      } else if (temp <= 65) {
        return "cold";
      }
    } else {
      if (currentTemperatureUnit === "C") {
        if (temp >= 30) {
          return "hot";
        } else if (temp >= 18 && temp <= 29) {
          return "warm";
        } else if (temp <= 17) {
          return "cold";
        }
      }
    }
  };
  const weatherType = getWeatherType();

  // const filteredCards = async () =>
  //   await setClothingItems.filter((item) => {
  //     return item.weather === weatherType;
  //   });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const clothingItems = await setClothingItems;
        const filtered = clothingItems.filter(
          (item) => item.weather === weatherType
        );
        setFilteredCards(filtered);
      } catch (error) {}
    };
  });

  //   return (
  //     <main className="main">
  //       <WeatherCard day={true} type="Cloudy" weatherTemp={temp} />
  //       <section id="card-section" className="card_section">
  //         <div>
  //           Today is {temp}°{currentTemperatureUnit} : You may want to wear:
  //         </div>
  //         <div className="card_items">
  //           {filteredCards.map((item) => (
  //             <ItemCard
  //               item={item}
  //               img={item.imageUrl}
  //               onSelectCard={onSelectCard}
  //               key={item._id}
  //             />
  //           ))}
  //         </div>
  //       </section>
  //     </main>
  //   );
  // }
  return (
    <main className="main">
      <WeatherCard day={true} type="Cloudy" weatherTemp={temp} />
      <section id="card-section" className="card_section">
        <div>
          Today is {temp}°{currentTemperatureUnit} : You may want to wear:
        </div>
        <div className="card_items">
          {/* Use await to wait for the promise to resolve before mapping */}
          {await filteredCards().then((cards) =>
            cards.map((item) => (
              <ItemCard
                item={item}
                img={item.imageUrl}
                onSelectCard={onSelectCard}
                key={item._id}
              />
            ))
          )}
        </div>
      </section>
    </main>
  );
}
