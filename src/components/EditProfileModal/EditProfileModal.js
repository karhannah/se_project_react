import "../ModalWithForm/ModalWithForm.css";
import closeButton from "../../images/grey-x-button.svg";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import * as api from "../../utils/api";

const EditProfileModal = ({ currentUser, onClose, onEditSave }) => {
  const history = useHistory();

  const [values, setValues] = useState({
    name: currentUser.name,
    avatar: currentUser.avatar,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    console.log(values);
  };

  return (
    <div className="modal__overlay">
      <div className={`modal profile`}>
        <div className="profile__content">
          <div className="profile__modal-container">
            <button className="profile__modal-close" type="button">
              <img src={closeButton} onClick={onClose} alt="Close Button"></img>
            </button>
          </div>
          <div className="profile__modal-form">
            <p className="profile__modal-title">Change Profile Data</p>
            <label>{"Name "}</label>
            <input
              required
              className="profile__modal-input"
              name="name"
              type="text"
              value={values.name}
              onChange={handleChange}
            />
            <label>{"Avatar URL "}</label>
            <input
              required
              className="profile__modal-input"
              name="avatar"
              type="URL"
              value={values.avatar}
              onChange={handleChange}
            />
          </div>
          <div className="profile__modal-options">
            <button className="profile__modal-save" onClick={onEditSave}>
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
