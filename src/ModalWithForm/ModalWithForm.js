import React from "react";
import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  buttonText = "Add garment",
  title,
  onClose,
  name,
  state = { disabled: true },
}) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <button
          className="modal__close-button"
          type="button"
          onClick={onClose}
        ></button>
        <h3 className="modal__title">{title}</h3>
        <form className="modal__add-form">
          {children}
          <button
            className="modal__add-form_button"
            disabled={state}
            type="submit"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
