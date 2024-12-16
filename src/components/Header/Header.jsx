import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

import { Link } from "react-router-dom";

function Header({ handleAddClick, weatherData }) {
	const currentDate = new Date().toLocaleString( "default", {
	    month: "long",
		day: "numeric" });

	return (
		<div className = "header">
			<Link to = "/" className = "header__link">
				<img className = "header__logo" alt = "logo" src = { logo } />
			</Link>
			<p className = "header__date-and-location">{ currentDate }, { weatherData.city }</p>

			
			<div className="header__user-container">
				<ToggleSwitch />
				<button onClick={handleAddClick} type="button" className="header__add-clothes-btn">+ Add clothes</button>
				<Link to="/profile" className = "header__link">
					<div className = "header__user-subcontainer">
						<p className="header__username">Terrence Tegegne</p>
						<img src={avatar} alt="Terrence Tegegne" className="header__avatar" />
					</div>
				</Link>
			</div>

		</div>
	);
}

export default Header;
