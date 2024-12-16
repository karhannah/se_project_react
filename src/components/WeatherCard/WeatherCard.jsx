import './WeatherCard.css'
import { weatherOptions, defaultWeatherOptions } from "../../utils/constants.js";
import React, { useContext, useState } from "react";
import { CurrentTemperatureUnitContext } from "../Contexts/CurrentTemperatureUnitContext.jsx"

function WeatherCard({ weatherData }) {
	const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(CurrentTemperatureUnitContext);
	
	const filteredOptions = weatherOptions.filter((option) => {
		return option.day === weatherData.isDay &&
			   option.condition === weatherData.condition;
	})

	let weatherOption;
	
	if (filteredOptions.length === 0) {
		weatherOption = defaultWeatherOptions[weatherData.isDay ? "day" : "night"];
	} else {
		weatherOption = filteredOptions[0];
	}
		
	return (
		<section className = "weather-card">
			<p className = "weather-card__temp">{ currentTemperatureUnit === 'F' ? weatherData.temp.F : weatherData.temp.C }&deg; { currentTemperatureUnit === 'C' ? 'C' : 'F' } </p>
			<img src = { weatherOption?.url } alt = { `Card Showing ${ weatherOption?.day ? "day" : "night" }time ${ weatherOption?.condition } weather` } className = "weather-card__image" />
		</section>
	);
}

export default WeatherCard;
