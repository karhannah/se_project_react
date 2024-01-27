import avatarLogo from "../../images/headerAvatar.svg";
import EditProfileModal from "../EditProfileModal/EditProfileModal";

const SideBar = ({ onClick, onClose }) => {
  return (
    <div className="profile__container">
      <div className="profile__logo">
        <img className="profile__avatar-logo" src={avatarLogo} alt="Avatar" />
        <p className="profile__user-name">Terrence Tegegne</p>
      </div>
      <button onClick={onClick} onClose={onClose}>
        Change Profile Data
      </button>
    </div>
  );
};
export default SideBar;
