import AvatarLogo from "../../images/headerAvatar.svg";
import avatarImage from "../../images/headerLogo.svg";
import "./Header.css";

const Header = ({ onCreate, city, currentDate }) => {
  return (
    <div>
      <header className="header">
        <div className="header__logo">
          <div>
            <img src={avatarImage} alt="Logo" />
          </div>
          <div className="header__date-and-location">
            <div className="header__date">{currentDate},</div>
            <div className="header__location">{city}</div>
          </div>
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
