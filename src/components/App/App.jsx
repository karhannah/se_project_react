import "./Main.css";
import { useState } from "react";
import './App.css'
import Header from '../Header/Header';
import Main from "../Main/Main";
import { useState } from 'react';

function App() {
  const [WeatherData, setWeatherData] = useState({ type: "hot"});

  return (
  <div className="page">
    <div className="page__content">
        <Header />
        <Main weatherData={WeatherData}/>
      </div>
    </div>
    );
}

export default App;
