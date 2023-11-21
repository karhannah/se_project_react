import DeleteItemModal from "../../DeleteItemModal/DeleteItemModal";
import { useState } from "react";
const ItemModal = ({ selectedCard, onClose }) => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  return (
    <div className="modal__overlay">
      <div className={`modal`}>
        <div className="modal__content modal__content-item">
          <button
            className="modal__close-button modal__close-button_image"
            type="button"
            onClick={onClose}
          ></button>
          <img className="modal__image" src={selectedCard.link}></img>
          <div className="modal__description">
            <div>{selectedCard.name}</div>
            <div>weather type: {selectedCard.weather}</div>
          </div>
          <div className="modal__delete-button_container">
            <button
              className="modal__delete-button"
              onClick={() => setDeleteModalOpen(true)}
            >
              Delete Item
            </button>
          </div>
          {deleteModalOpen && (
            <DeleteItemModal>
              <p>Are you sure you want to delete this item?</p>
              <p>This action is irreversible.</p>
            </DeleteItemModal>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
