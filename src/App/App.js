import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { useEffect, useState } from "react";
import { getWeatherAndLocation, parseWeatherData } from "../Utils/WeatherApi";
import "./App.css";

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
        <ModalWithForm title="New garment" onClose={handleCloseModal}>
          <label>
            Name
            <input type="text" name="name" minLength="2" maxLength="30" />
          </label>
          <label>
            Image
            <input type="url" name="link" minLength="2" maxLength="30" />
          </label>
          <p>select weather type:</p>
          <div>
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
