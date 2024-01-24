import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
const AddItemModal = ({
  loggedIn,
  handleCloseModal,
  setActiveModal,
  onAddItem,
}) => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [weatherType, setWeatherType] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };
  const handleLinkChange = (e) => {
    setLink(e.target.value);
    console.log(e.target.value);
  };
  const handleWeatherTypeChange = (e) => {
    setWeatherType(e.target.value);
    console.log(e.target.value);
  };

  const generateUniqueId = () => {
    const timestamp = new Date().getTime();
    const randomNum = Math.random().toString(36).substring(2, 8);

    return `${timestamp}-${randomNum}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({
      _id: generateUniqueId(),
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
            onChange={handleLinkChange}
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
              onChange={handleWeatherTypeChange}
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
              onChange={handleWeatherTypeChange}
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
              onChange={handleWeatherTypeChange}
            />
            Cold
          </label>
        </div>
      </div>
    </ModalWithForm>
  );
};
export default AddItemModal;
