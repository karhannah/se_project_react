import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import "./App.css";
import { useEffect, useState } from "react";
import { getWeather, parseWeatherData } from "../Utils/WeatherApi";

function App() {
  const weatherTemp = "30";
  const [activeModal, setActiveModal] = useState("");
  const [selectedcard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);

  const handleCreateModal = () => {
    setActiveModal("create");
  };
  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleEscapeClose = (e) => {
    if (e.key === "Escape") {
      console.log("User pressed:", e.key);
    }
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  useEffect(() => {
    getWeather().then((data) => {
      console.log(data);
      const temperature = parseWeatherData(data);
      setTemp(temperature);
    });
  }, []);
  console.log(temp);

  return (
    <div>
      <Header onCreate={handleCreateModal} />
      <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm
          title="New garment"
          onClose={handleCloseModal}
          onKeyDown={handleEscapeClose}
        >
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
        <ItemModal
          selectedCard={selectedcard}
          onClose={handleCloseModal}
          onKeyDown={handleEscapeClose}
        />
      )}
    </div>
  );
}

export default App;
