import avatarLogo from "../../images/headerAvatar.svg";

const SideBar = ({ onClick }) => {
  return (
    <div className="profile__container">
      <div className="profile__logo">
        <img className="profile__avatar-logo" src={avatarLogo} alt="Avatar" />
        <p className="profile__user-name">Terrence Tegegne</p>
      </div>
      <button onClick={onClick}>Change Profile Data</button>
    </div>
  );
};
export default SideBar;
