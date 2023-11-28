import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
const AddItemModal = ({ handleCloseModal, setActiveModal, onAddItem }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const [link, setUrl] = useState("");
  const handleUrlChange = (e) => {
    console.log(e.target.value);
    setUrl(e.target.value);
  };

  const [weatherType, setWeatherType] = useState("");
  const handleRadioChange = (e) => {
    console.log(e.target.value);
    setWeatherType(e.target.value);
  };
  const generateUniqueId = () => {
    const timestamp = new Date().getTime();
    const randomNum = Math.random().toString(36).substring(2, 8);

    return `${timestamp}-${randomNum}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({
      id: generateUniqueId(),
      name,
      imageUrl: link,
      weather: weatherType,
    });
  };
  return (
    <ModalWithForm
      title="New garment"
      onClose={handleCloseModal}
      setActiveModal={setActiveModal}
      onSubmit={handleSubmit}
    >
      <div className="modal__input-container">
        <label className="modal__label">
          <p className="modal__input-title">Name</p>
          <input
            className="modal__input"
            required
            type="text"
            name="name"
            minLength="2"
            maxLength="30"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
          />
        </label>

        <label className="modal__label">
          <p className="modal__input-title">Image</p>
          <input
            className="modal__input"
            required
            type="url"
            name="link"
            minLength="2"
            placeholder="Image URL"
            value={link}
            onChange={handleUrlChange}
          />
        </label>
      </div>
      <p className="modal__radio-title">select weather type:</p>
      <div className="modal__radio-buttons">
        <div>
          <label>
            <input
              type="radio"
              name="weatherType"
              id="hot"
              value="hot"
              onChange={handleRadioChange}
            />
            Hot
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="weatherType"
              id="warm"
              value="warm"
              onChange={handleRadioChange}
            />
            Warm
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="weatherType"
              id="cold"
              value="cold"
              onChange={handleRadioChange}
            />
            Cold
          </label>
        </div>
      </div>
    </ModalWithForm>
  );
};
export default AddItemModal;
