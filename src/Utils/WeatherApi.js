import React from "react";
import WeatherAPIEndPoint from "./WeatherApi";
import WeatherAPIKey from "./WeatherApi";
// import axios from "axios";

// function Weather() {
//   const [latitude, setLat] = React.useState("");
//   const [longitude, setLong] = React.useState("");
//   const [city, setCity] = React.useState("");
//   React.useEffect(() => {
//     navigator.geolocation.getCurrentPosition((position) => {
//       setLat(position.coords.latitude);
//       setLong(position.coords.longitude);
//     });

//     let WeatherFinalAPIEndPoint = `${WeatherAPIEndPoint}lat=${latitude}&lon=${longitude}&appid=${WeatherAPIKey}`;

//     axios.get(WeatherFinalAPIEndPoint).then((response) => {
//       setCity(city.data);
//     });
//   }, []);
//   return (
//     <div>
//       <h1>{setCity.name}</h1>
//     </div>
//   );
// }

// export default Weather;
