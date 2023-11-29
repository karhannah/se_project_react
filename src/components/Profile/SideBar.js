import avatarLogo from "../../images/headerAvatar.svg";

const SideBar = () => {
  return (
    <div className="profile__logo">
      <img className="profile__avatar-logo" src={avatarLogo} alt="Avatar" />
      <p className="profile__user-name">Terrence Tegegne</p>
    </div>
  );
};
export default SideBar;
