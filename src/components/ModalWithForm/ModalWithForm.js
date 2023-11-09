import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  buttonText,
  title,
  onClose,
  name,
  state = { disabled: true },
  ref,
}) => {
  return (
    <div className="modal__overlay" ref={ref}>
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
              {(buttonText = "Add garment")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalWithForm;
