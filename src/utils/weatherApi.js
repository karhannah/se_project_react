export const getWeather = ({ latitude, longitude }, APIkey) => {
	return fetch(
		`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
	).then((res) => {
		if (res.ok) {
			return res.json();
		} else {
			return Promise.reject(`Error: ${res.status}`);
		}
	});
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
			F: data.main.temp
		},
		type: getWeatherType(data.main.temp),
		condition: data.weather[0].main.toLowerCase(),
		isDay: isDay(data.sys, Date.now()),
	};

	console.log(result);

	return result;
};
