import "../ModalWithForm/ModalWithForm.css";
const ItemModal = ({ currentUser, selectedCard, onClose, onClick }) => {
  const isOwn = selectedCard.owner === currentUser._id;

  const itemDeleteButtonClassName = `modal__delete-button ${
    isOwn ? "modal__delete-button_visible" : "modal__delete-button_hidden"
  }`;

  return (
    <div className="modal__overlay">
      <div className={`modal`}>
        <div className="modal__content modal__content-item">
          <button
            className="modal__close-button modal__close-button_image"
            type="button"
            onClick={onClose}
          ></button>
          <img
            className="modal__image"
            src={selectedCard.imageUrl}
            alt={selectedCard.name}
          ></img>
          <div className="modal__description">
            <div>{selectedCard.name}</div>
            <div>weather type: {selectedCard.weather}</div>
          </div>
          <div className="modal__delete-button_container">
            <button className={itemDeleteButtonClassName} onClick={onClick}>
              Delete Item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
