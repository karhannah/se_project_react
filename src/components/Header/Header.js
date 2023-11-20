import ToggleSwitch from "../../ToggleSwitch/ToggleSwitch";
import AvatarLogo from "../../images/headerAvatar.svg";
import avatarImage from "../../images/headerLogo.svg";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ onCreate, city, currentDate }) => {
  return (
    <div>
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
          <Link to="/profile" className="header__user-name">
            Terrence Tegegne
          </Link>
          <div>
            <img src={AvatarLogo} alt="Avatar" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
