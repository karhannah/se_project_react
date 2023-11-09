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

import "./App.css";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedcard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
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
      <Header
        onCreate={handleCreateModal}
        city={city}
        currentDate={currentDate}
      />
      <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm
          title="New garment"
          onClose={handleCloseModal}
          setActiveModal={setActiveModal}
        >
          <div className="modal__input-container">
            <p className="modal__input-title">Name</p>
            <label className="modal__label">
              <input
                className="modal__input"
                required
                type="text"
                name="name"
                minLength="2"
                maxLength="30"
                placeholder="Name"
              />
            </label>
            <p className="modal__input-title">Image</p>
            <label className="modal__label">
              <input
                className="modal__input"
                required
                type="url"
                name="link"
                minLength="2"
                maxLength="30"
                placeholder="Image URL"
              />
            </label>
          </div>
          <p className="modal__radio-title">select weather type:</p>
          <div className="modal__radio-buttons">
            <div>
              <input type="radio" name="weatherType" id="hot" value="hot" />
              <label>Hot</label>
            </div>
            <div>
              <input type="radio" name="weatherType" id="warm" value="warm" />
              <label>Warm</label>
            </div>
            <div>
              <input type="radio" name="weatherType" id="cold" value="cold" />
              <label>Cold</label>
            </div>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedcard} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
