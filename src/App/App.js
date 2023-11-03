import ItemModal from "../ItemModal/ItemModal";
import Header from "../Header/Header";
import "./App.css";

// image imports
// Day weather images
import WeatherSunny from "../images/day/WeatherSunny.svg";
import WeatherCloudy from "../images/day/WeatherCloudy.svg";
import WeatherRain from "../images/day/WeatherRain.svg";
import WeatherStorm from "../images/day/WeatherStorm.svg";
import WeatherFog from "../images/day/WeatherFog.svg";
import WeatherSnow from "../images/day/WeatherSnow.svg";
// Night weather images
import WeatherNightFullMoon from "../images/night/WeatherNightFullMoon.svg";
import WeatherNightMoonCloudy from "../images/night/WeatherNightMoonCloudy.svg";
import WeatherNightRain from "../images/night/WeatherNightRain.svg";
import WeatherNightSnow from "../images/night/WeatherNightSnow.svg";
import WeatherNightFog from "../images/night/WeatherNightFog.svg";
import WeatherNightStorm from "../images/night/WeatherNightStorm.svg";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section className="weather" id="weather">
          weather
          <div className="weather_info">75F</div>
          <div>
            <img src={WeatherSunny} />
          </div>
        </section>
        <section id="card-section">Card section</section>
      </main>
    </div>
  );
}

export default App;
