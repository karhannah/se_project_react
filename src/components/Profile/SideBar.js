import avatarLogo from "../../images/headerAvatar.svg";
import EditProfileModal from "../EditProfileModal/EditProfileModal";

const SideBar = () => {
  return (
    <div className="profile__container">
      <div className="profile__logo">
        <img className="profile__avatar-logo" src={avatarLogo} alt="Avatar" />
        <p className="profile__user-name">Terrence Tegegne</p>
      </div>
      <EditProfileModal />
    </div>
  );
};
export default SideBar;
