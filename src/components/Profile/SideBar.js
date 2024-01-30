import React from "react";
import { useHistory } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import UserPlaceHolder from "../UserPlaceHolder/UserPlaceHolder";

const SideBar = ({ onClick, isLoggedIn }) => {
  const { currentUser } = React.useContext(CurrentUserContext);
  const history = useHistory();

  const handleLogout = async () => {
    try {
      localStorage.removeItem("token");
      isLoggedIn(false);
      history.push("/");
    } catch (error) {
      console.log("error on log out");
    }
  };

  return (
    <div className="profile__container">
      <div className="profile__logo">
        {isLoggedIn ? (
          currentUser.avatar ? (
            <img
              className="profile__avatar-logo"
              src={currentUser.avatar}
              alt="Avatar"
            />
          ) : (
            <UserPlaceHolder isLoggedIn={isLoggedIn}></UserPlaceHolder>
          )
        ) : (
          <></>
        )}
        <p className="profile__user-name">{currentUser.name}</p>
      </div>
      <button className="profile__change-data" onClick={() => onClick("edit")}>
        Change Profile Data
      </button>
      <button className="profile__log-out" onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
};
export default SideBar;
