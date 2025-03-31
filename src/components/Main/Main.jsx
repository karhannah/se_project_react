import './Main.css';
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { CurrentTemperatureUnitContext } from '../../utils/Contexts/CurrentTemperatureUnitContext.jsx';
import { CurrentUserContext } from "../../utils/Contexts/CurrentUserContext.jsx";
import React, { useContext, useState } from "react";

function Main({ weatherData, handleCardClick, clothingItems, onCardLike }) {
	const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(CurrentTemperatureUnitContext);
	const { currentUser, isLoggedIn } = useContext(CurrentUserContext);
	
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
					} ).map((item) => {
						item.cardRef = React.createRef();
						
						return (<ItemCard cardRef = { item.cardRef }
									      key = { item._id }
										  cardId = { item._id }
										  item = { item }
										  onCardClick = { handleCardClick }
										  onCardLike = { onCardLike }
								/>);
					} ) }
				</ul>
			</section>
		</main>
	);
}

export default Main;
