import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import AvatarLogo from "../../images/headerAvatar.svg";
import avatarImage from "../../images/headerLogo.svg";
import { Link } from "react-router-dom";
import "./Header.css";
// import the context
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import React from "react";

const Header = ({ setLoggedIn, onCreate, city, currentDate }) => {
  const { currentUser } = React.useContext(CurrentUserContext);

  console.log(currentUser);
  console.log(setLoggedIn);
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <Link to="/">
            <img src={avatarImage} alt="Logo" />
          </Link>
        </div>
        <div className="header__date-and-location">
          <div className="header__date">{currentDate},</div>
          <div className="header__location">{city}</div>
        </div>
      </div>
      <div className="header__avatar-logo">
        <ToggleSwitch />
        <div>
          <button
            className="header__button-add-clothes"
            onClick={onCreate}
            type="button"
          >
            + Add Clothes
          </button>
        </div>
        {setLoggedIn ? (
          <Link to="/profile" className="header__user-name">
            {currentUser.name}
          </Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
        <div>
          <img src={AvatarLogo} alt="Avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
