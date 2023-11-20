import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import React, { useEffect, useState } from "react";
import {
  getWeatherAndLocation,
  locationData,
  parseWeatherData,
} from "../../utils/WeatherApi";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";

import "./App.css";
import { Route, Switch } from "react-router-dom";
import AddItemModal from "../../AddItemModal/AddItemModal";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedcard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const handleCreateModal = () => {
    setActiveModal("create");
  };
  const handleCloseModal = () => {
    setActiveModal("");
  };
  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };
  const onAddItem = (values) => {
    console.log(values);
    // add functionality to this to make the new cards render to the page
  };
  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    if (!activeModal) return;
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };
    const handleOverlayClick = (e) => {
      if (e.target.classList.contains("modal")) {
        handleCloseModal();
      }
    };
    document.addEventListener("mousedown", handleOverlayClick);
    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
      document.removeEventListener("mousedown", handleOverlayClick);
    };
  }, [activeModal]);

  useEffect(() => {
    getWeatherAndLocation()
      .then((data) => {
        const temperature = parseWeatherData(data);
        const city = locationData(data);
        setTemp(temperature);
        setCity(city);
        // setType(parseWeatherTYpe(data))
        // setTime(Date.now())
      })
      .catch((error) => {
        console.log("Error: An error occurred", error);
      });
  }, []);
  return (
    <div>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header
          onCreate={handleCreateModal}
          city={city}
          currentDate={currentDate}
        />
        <Switch>
          <Route exact path="/">
            <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
          </Route>
          <Route path="/profile">profile</Route>
        </Switch>

        <Footer />
        {activeModal === "create" && (
          <AddItemModal
            handleCloseModal={handleCloseModal}
            setActiveModal={activeModal === "create"}
            onAddItem={onAddItem}
          />
        )}
        {activeModal === "preview" && (
          <ItemModal selectedCard={selectedcard} onClose={handleCloseModal} />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
