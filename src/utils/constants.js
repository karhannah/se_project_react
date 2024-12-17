export const APIkey = "88cae53dd9c8dbbb7f09c64c2855e7fa";

export const weatherOptions = [
	{
		day: true,
		condition: "clear",
		url: new URL("../assets/weatherconditions/day_clear.png", import.meta.url).href,
	},
	{
		day: true,
		condition: "clouds",
		url: new URL("../assets/weatherconditions/day_cloudy.png", import.meta.url).href,
	},
	{
		day: true,
		condition: "rain",
		url: new URL("../assets/weatherconditions/day_rain.png", import.meta.url).href,
	},
	{
		day: true,
		condition: "storm",
		url: new URL("../assets/weatherconditions/day_storm.png", import.meta.url).href,
	},
	{
		day: true,
		condition: "snow",
		url: new URL("../assets/weatherconditions/day_snow.png", import.meta.url).href,
	},
	{
		day: true,
		condition: "fog",
		url: new URL("../assets/weatherconditions/day_fog.png", import.meta.url).href,
	},
	{
		day: false,
		condition: "clear",
		url: new URL("../assets/weatherconditions/night_clear.png", import.meta.url).href,
	},
	{
		day: false,
		condition: "clouds",
		url: new URL("../assets/weatherconditions/night_cloudy.png", import.meta.url).href,
	},
	{
		day: false,
		condition: "rain",
		url: new URL("../assets/weatherconditions/night_rain.png", import.meta.url).href,
	},
	{
		day: false,
		condition: "storm",
		url: new URL("../assets/weatherconditions/night_storm.png", import.meta.url).href,
	},
	{
		day: false,
		condition: "snow",
		url: new URL("../assets/weatherconditions/night_snow.png", import.meta.url).href,
	},
	{
		day: false,
		condition: "fog",
		url: new URL("../assets/weatherconditions/night_fog.png", import.meta.url).href,
	},
]

export const defaultWeatherOptions = {
	day: {
		day: true,
		condition: "unknown",
		url: new URL("../assets/weatherconditions/day_default.png", import.meta.url).href,
	},
	night: {
		day: false,
		condition: "unknown",
		url: new URL("../assets/weatherconditions/night_default.png", import.meta.url).href,
	},
}

export const coordinates = {
	latitude: 40.249199,
	longitude: -75.646759,
};
