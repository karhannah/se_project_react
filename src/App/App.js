import ItemModal from "../ItemModal/ItemModal";
import Header from "../Header/Header";
import "./App.css";

// image imports
import WeatherSunny from "../images/WeatherSunny.svg";
import WeatherCloudy from "../images/WeatherCloudy.svg";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="weather">
          weather
          <div>75F</div>
          <div>{/* <img src={} /> */}</div>
        </section>
        <section id="card-section">Card section</section>
      </main>
    </div>
  );
}

export default App;
