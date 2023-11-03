import currentDate from "../Date/Date";
import headerLogo from "../images/headerLogo.svg";
import AvatarLogo from "../images/headerAvatar.svg";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="header__logo">
          <div>
            <img src={headerLogo} alt="Logo" />
          </div>
          <div className="header__date">{currentDate}</div>
          {/* <div>state is: {state}</div> */}
        </div>
        <div className="header__avatar-logo">
          <div>
            <button className="header__button-add-clothes" type="button">
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
