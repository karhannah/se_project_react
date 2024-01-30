import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import avatarImage from "../../images/headerLogo.svg";
import { Link } from "react-router-dom";
import "./Header.css";
import "../UserPlaceHolder/UserPlaceHolder.css";
// import the context
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import React from "react";
import UserPlaceHolder from "../UserPlaceHolder/UserPlaceHolder";

const Header = ({ isLoggedIn, city, currentDate, onClick }) => {
  const { currentUser } = React.useContext(CurrentUserContext);
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
          {isLoggedIn ? (
            <button
              className="header__button-add-clothes"
              onClick={() => onClick("create")}
              type="button"
            >
              + Add Clothes
            </button>
          ) : (
            <></>
          )}
        </div>
        {isLoggedIn ? (
          <p to="/profile" className="header__user-name">
            {currentUser.name}
          </p>
        ) : (
          <Link
            to="/register"
            onClick={() => onClick("register")}
            className="header__sign"
          >
            Sign Up
          </Link>
        )}

        <div>
          {isLoggedIn ? (
            currentUser.avatar ? (
              <Link to="/profile">
                <img
                  src={currentUser.avatar}
                  className="header__avatar"
                  alt="Avatar"
                />
              </Link>
            ) : (
              <UserPlaceHolder isLoggedIn={isLoggedIn} />
            )
          ) : (
            <Link
              to="/login"
              onClick={() => onClick("login")}
              className="header__sign"
            >
              Log in
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
