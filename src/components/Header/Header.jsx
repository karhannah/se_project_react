import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { useContext } from "react";
import { CurrentUserContext } from "../../utils/Contexts/CurrentUserContext";

import { Link } from "react-router-dom";

function Header({ isLoggedIn, handleLoginClick, handleRegisterClick, handleAddClick, weatherData }) {
	const { currentUser, handleUserChange } = useContext(CurrentUserContext);
	const currentDate = new Date().toLocaleString( "default", {
	    month: "long",
		day: "numeric" });

	return (
		<div className = "header">
			<Link to = "/" className = "header__link">
				<img className = "header__logo" alt = "logo" src = { logo } />
			</Link>
			<p className = "header__date-and-location">{ currentDate }, { weatherData.city }</p>
			{
				isLoggedIn ?
					(
						<div className="header__user-container">
							<ToggleSwitch />
							<button onClick={handleAddClick} type="button" className="header__add-clothes-btn">+ Add clothes</button>
							<Link to="/profile" className="header__link">
								<div className="header__user-subcontainer">
									<p className="header__username">{ currentUser.name }</p>
									<img src={currentUser.avatar} alt={ currentUser.name[0] } className="header__avatar" />
								</div>
							</Link>
						</div>
					) :
					(
						<div className="header__user-container">
							<ToggleSwitch />
							<button className = "header__btn" type="button" onClick={handleRegisterClick}>Register</button>
							<button className = "header__btn" type="button" onClick={handleLoginClick}>Log In</button>
						</div>
					)

			}
		</div>
	);
}

export default Header;
