import React, { useState } from "react";
import ModalWithForm from "../components/ModalWithForm/ModalWithForm";
import "./DeleteItemModal.css";

const DeleteItemModal = ({ children }) => {
  const [deleteItem, setDeleteItem] = useState("");

  const handleDeleteItem = () => {
    console.log("Handle delete fired");
  };
  return (
    <div className="delete__modal-container">
      <div className="delete__modal">
        <div className="delete__modal-header"></div>
        <button className="delete__modal-close">&times;</button>
        <div className="delete__modal-content">
          <p>{children}</p>
        </div>
        <div className="delete__modal-footer">
          <button className="delete_btn delete_btn-confirm">
            Yes, delete item
          </button>
          <button className="delete_btn delete_btn-cancel">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteItemModal;
