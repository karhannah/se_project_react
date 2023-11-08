import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { getWeatherAndLocation, parseWeatherData } from "../Utils/WeatherApi";

import "./App.css";
let useClickOutside = (handler) => {
  const domNode = useRef();
  useEffect(() => {
    let maybeHandler = (e) => {
      if (!domNode.current?.contains(e.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });
  return domNode;
};

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedcard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);

  const handleCreateModal = () => {
    setActiveModal("create");
  };
  const handleCloseModal = () => {
    setActiveModal("");
  };

  const domNode = useClickOutside(() => {
    setActiveModal("");
  });

  useEffect(() => {
    if (!activeModal) return;
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };
    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  useEffect(() => {
    getWeatherAndLocation().then((data) => {
      const temperature = parseWeatherData(data);
      setTemp(temperature);
    });
  }, []);

  return (
    <div>
      <Header onCreate={handleCreateModal} />
      <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm
          ref={domNode}
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
              <input type="radio" id="hot" value="hot" />
              <label>Hot</label>
            </div>
            <div>
              <input type="radio" id="warm" value="warm" />
              <label>Warm</label>
            </div>
            <div>
              <input type="radio" id="cold" value="cold" />
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
