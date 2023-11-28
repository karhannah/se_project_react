import closeButton from "../../images/grey-x-button.svg";
import "../ModalWithForm/ModalWithForm.css";
const DeleteItemModal = ({ onClose, deleteCard }) => {
  return (
    <div className="delete__modal-container">
      <div className={`modal`}>
        <div className="delete__modal">
          <div className="delete__modal-header">
            <button className="delete__modal-close">
              <img src={closeButton} onClick={onClose}></img>
            </button>
          </div>

          <div className="delete__modal-content">
            <p className="delete__modal-text">
              Are you sure you want to delete this item?
            </p>
            <p className="delete__modal-text">This action is irreversible.</p>
          </div>
          <div className="delete__modal-footer">
            <button
              className="delete_btn delete_btn-confirm"
              onClick={deleteCard}
            >
              Yes, delete item
            </button>
            <button className="delete_btn delete_btn-cancel" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteItemModal;
