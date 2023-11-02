import ItemModal from "../ItemModal/ItemModal";
import currentDate from "../Date/Date";
import "./App.css";
// image imports
import headerLogo from "../images/headerLogo.svg";
import AvatarLogo from "../images/headerAvatar.svg";

function App() {
  return (
    <div>
      <header className="header">
        <div className="header__logo">
          <div>
            <img src={headerLogo} alt="Logo" />
          </div>
          <div>{currentDate}</div>
        </div>
        <div className="header__avatar-logo">
          <div>
            <button className="header__button-add-clothes" type="button">
              + Add Clothes
            </button>
          </div>
          <div>Terrence Tegegne</div>
          <div>
            <img src={AvatarLogo} alt="Avatar" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
