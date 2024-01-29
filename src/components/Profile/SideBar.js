import avatarLogo from "../../images/headerAvatar.svg";
import { useHistory } from "react-router-dom";

const SideBar = ({ onClick, isLoggedIn, handleOpenModal }) => {
  const history = useHistory();

  const handleLogout = async () => {
    try {
      localStorage.removeItem("token");
      isLoggedIn(false);
      history.push("/");
      handleOpenModal(() => handleOpenModal("login"));
    } catch (error) {
      console.log("error on log out");
    }
  };
  return (
    <div className="profile__container">
      <div className="profile__logo">
        <img className="profile__avatar-logo" src={avatarLogo} alt="Avatar" />
        <p className="profile__user-name">Terrence Tegegne</p>
      </div>
      <button className="profile__change-data" onClick={onClick}>
        Change Profile Data
      </button>
      <button className="profile__log-out" onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
};
export default SideBar;
