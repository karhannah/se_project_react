import React, { useState } from "react";
import ModalWithForm from "../components/ModalWithForm/ModalWithForm";
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

  const [radio, setRadio] = useState("");
  const handleRadioChange = (e) => {
    console.log(e.target.value);
    setRadio(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, link, radio });
  };
  return (
    <ModalWithForm
      title="New garment"
      onClose={handleCloseModal}
      setActiveModal={setActiveModal}
      onSubmit={handleSubmit}
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
            value={name}
            onChange={handleNameChange}
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
            value={link}
            onChange={handleUrlChange}
          />
        </label>
      </div>
      <p className="modal__radio-title">select weather type:</p>
      <div className="modal__radio-buttons">
        <div>
          <input
            type="radio"
            name="weatherType"
            id="hot"
            value="hot"
            onChange={handleRadioChange}
          />
          <label>Hot</label>
        </div>
        <div>
          <input
            type="radio"
            name="weatherType"
            id="warm"
            value="warm"
            onChange={handleRadioChange}
          />
          <label>Warm</label>
        </div>
        <div>
          <input
            type="radio"
            name="weatherType"
            id="cold"
            value="cold"
            onChange={handleRadioChange}
          />
          <label>Cold</label>
        </div>
      </div>
    </ModalWithForm>
  );
};
export default AddItemModal;
