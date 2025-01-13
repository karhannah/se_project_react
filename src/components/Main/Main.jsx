import './Main.css';
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { CurrentTemperatureUnitContext } from '../../utils/Contexts/CurrentTemperatureUnitContext.jsx';
import React, { useContext, useState } from "react";

function Main({ cardArray, weatherData, handleCardClick, clothingItems }) {
	const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(CurrentTemperatureUnitContext);

	cardArray["arr"] = [];
	
	return (
		<main>
			<WeatherCard weatherData = { weatherData }/>
			<section className = "cards">
				<p className = "cards__text">
					Today is { currentTemperatureUnit === 'F' ? weatherData.temp.F : weatherData.temp.C } &deg; { currentTemperatureUnit === 'F' ? 'F' : 'C' } / you may want to wear:
				</p>
				<ul className = "cards__list card__container">					
					{ clothingItems.filter((item) => {
						return item.weather === weatherData.type;
					} ).reverse().map((item) => {
						let arrayItem = { cardRef: React.createRef() };
						
						cardArray[item._id] = arrayItem;

						cardArray["arr"][item._id] = { _id: item._id,
													   name: item.name,
													   imageUrl: item.imageUrl,
													   weather: item.weather
													 }
						
						return (<ItemCard cardRef = { arrayItem.cardRef }
									      key = { item._id }
										  cardId = { item._id }
										  item = { item }
										  onCardClick = { handleCardClick }
								/>);
					} ) }
				</ul>
			</section>
		</main>
	);
}

export default Main;
