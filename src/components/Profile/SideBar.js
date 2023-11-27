import AvatarLogo from "../../images/headerAvatar.svg";

const SideBar = () => {
  return (
    <div className="profile__logo">
      <img className="profile__avatar-logo" src={AvatarLogo} alt="Avatar" />
      <div className="profile__user-name">Terrence Tegegne</div>
    </div>
  );
};
export default SideBar;
