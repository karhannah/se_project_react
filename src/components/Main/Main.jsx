import './Main.css';
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { CurrentTemperatureUnitContext } from '../../utils/Contexts/CurrentTemperatureUnitContext.jsx';
import React, { useContext, useState } from "react";

function Main({ weatherData, handleCardClick, clothingItems }) {
	const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(CurrentTemperatureUnitContext);
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
					}).map((item) => {
						return (<ItemCard key = { item._id }
										  cardId = { item._id }
										  item = { item }
										  onCardClick = { handleCardClick }
								/>);
					} ) }

					<div className = "newcard">
						<ItemCard key = { -1 }
								  cardId = { -1 }
								  item = { { _id: -1, imageUrl: "", name: "", weather: "" } }
								  onCardClick = { handleCardClick }
						/>
					</div>
				</ul>
			</section>
		</main>
	);
}

export default Main;
