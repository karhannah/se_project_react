import ItemModal from "../ItemModal/ItemModal";
import Header from "../Header/Header";
import "./App.css";
import WeatherCard from "../WeatherCard/WeatherCard";

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <WeatherCard day={true} type="Sunny" />
        <section id="card-section">Card section</section>
      </main>
    </div>
  );
}

export default App;
