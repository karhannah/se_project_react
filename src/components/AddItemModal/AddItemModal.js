import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
const AddItemModal = ({
  loggedIn,
  handleCloseModal,
  setActiveModal,
  onAddItem,
}) => {
  const [values, setValues] = useState({ name: "", link: "", weatherType: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    console.log(e.target.value);
  };

  const generateUniqueId = () => {
    const timestamp = new Date().getTime();
    const randomNum = Math.random().toString(36).substring(2, 8);

    return `${timestamp}-${randomNum}`;
  };

  const handleSubmit = (e) => {};

  // e.preventDefault();
  // onAddItem({
  //   _id: generateUniqueId(),
  //   name,
  //   imageUrl: link,
  //   weather: weatherType,
  // });
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
            value={values.name}
            onChange={handleChange}
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
            value={values.link}
            onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
            />
            Cold
          </label>
        </div>
      </div>
    </ModalWithForm>
  );
};
export default AddItemModal;
