import { checkResponse } from "./api";

export const getWeather = ({ latitude, longitude }, APIkey) => {
	return fetch(
		`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
	).then(checkResponse);
}

const isDay = ({ sunrise, sunset }, now) => {
	return sunrise * 1000 < now && now < sunset * 1000;
}

const getWeatherType = (temp) => {
	if (temp >= 86)
		return "hot";
	else if (temp >= 66 && temp <= 85)
		return "warm";
	else
		return "cold";
}

export const filterWeatherData = ( data ) => {
	const result = {
		city: data.name,
		temp: {
			F: `${Math.round(data.main.temp)}`,
			C: `${Math.round((data.main.temp - 32) * (5.0/9.0))}`
		},
		type: getWeatherType(data.main.temp),
		condition: data.weather[0].main.toLowerCase(),
		isDay: isDay(data.sys, Date.now()),
	};
	
	return result;
};
