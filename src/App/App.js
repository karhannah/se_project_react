import ItemModal from "../ItemModal/ItemModal";
import Header from "../Header/Header";
import "./App.css";

// image imports
// Day weather images
import WeatherSunny from "../WeatherImages/WeatherSunny.svg";
import WeatherCloudy from "../WeatherImages/WeatherCloudy.svg";
import WeatherRain from "../WeatherImages/WeatherRain.svg";
import WeatherStorm from "../WeatherImages/WeatherStorm.svg";
import WeatherFog from "../WeatherImages/WeatherFog.svg";
import WeatherSnow from "../WeatherImages/WeatherSnow.svg";
// Night weather WeatherImages
import WeatherNightFullMoon from "../WeatherImages/WeatherNightFullMoon.svg";
import WeatherNightMoonCloudy from "../WeatherImages/WeatherNightMoonCloudy.svg";
import WeatherNightRain from "../WeatherImages/WeatherNightRain.svg";
import WeatherNightSnow from "../WeatherImages/WeatherNightSnow.svg";
import WeatherNightFog from "../WeatherImages/WeatherNightFog.svg";
import WeatherNightStorm from "../WeatherImages/WeatherNightStorm.svg";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="weather">
          weather
          <div>75F</div>
          <div className="WeatherImage">
            <img src={WeatherSunny} />
          </div>
        </section>
        <section id="card-section">Card section</section>
      </main>
    </div>
  );
}

export default App;
