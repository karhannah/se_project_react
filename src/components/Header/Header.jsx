import "./Header.css"
import logo from "../../images/wtwr.svg";
import avatar from "../../images/profilepic.png";
function Header() {
    return (
    <header className="header">
        <img className="header__logo" src={logo} alt="wtwr logo"/>
        <p className="header__date-and-location">June 15, New York</p>
        <button className="header__add-clothes-btn">+ Add clothes</button>
        <div className="header__user=container"><p className="header__username">Terrence Tegegne</p><img src={avatar} alt="Terrence Tegegne" className="header__avatar" />
        </div>
    </header>
    );
}

export default Header;