import currentDate from "../Date/Date";
import AvatarLogo from "../images/headerAvatar.svg";

import "./Header.css";

const Header = ({ onCreate }) => {
  return (
    <div>
      <header className="header">
        <div className="header__logo">
          <div>
            <img src={require("../images/headerLogo.svg").default} alt="Logo" />
          </div>
          <div className="header__date">{currentDate}</div>
          <div className="header__location">city name</div>
        </div>
        <div className="header__avatar-logo">
          <div>
            <button
              className="header__button-add-clothes"
              onClick={onCreate}
              type="button"
            >
              + Add Clothes
            </button>
          </div>
          <div className="header__user-name">Terrence Tegegne</div>
          <div>
            <img src={AvatarLogo} alt="Avatar" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
