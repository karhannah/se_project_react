import "../ModalWithForm/ModalWithForm.css";
import closeButton from "../../images/grey-x-button.svg";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import * as api from "../../utils/api";

const EditProfileModal = ({ currentUser, onClose, onEdit }) => {
  const history = useHistory();

  const [values, setValues] = useState({
    name: currentUser.name,
    avatar: currentUser.avatar,
  });

  const handleChange = async (e) => {
    try {
      const { name, value } = e.target;
      setValues({ ...values, [name]: value });
      console.log(values);
    } catch (error) {
      console.log(error.message);
    }
  };

  const onEditSave = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await api.editProfile(values, token);
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newInfo = await onEditSave();
      setValues(newInfo);
      onClose(onClose);
      return newInfo;
    } catch (error) {
      console.log("Error updating profile:", error);
    }
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
            <button className="profile__modal-save" onClick={handleSubmit}>
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
