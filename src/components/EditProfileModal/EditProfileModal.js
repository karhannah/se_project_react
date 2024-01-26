import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./EditProfileModal.css";

const EditProfileModal = ({ onClick }) => {
  return (
    <div className="profile__options">
      <button className="profile__options-edit" onClick={console.log(onClick)}>
        Edit Profile
      </button>
    </div>
  );
};

export default EditProfileModal;
