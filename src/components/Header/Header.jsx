import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";
import { useContext, useState } from "react";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { CurrentUserContext } from "../../utils/Contexts/CurrentUserContext";

import { Link } from "react-router-dom";

function Header({ handleLoginClick, handleRegisterClick, handleAddClick, weatherData }) {
	const { currentUser, isLoggedIn } = useContext(CurrentUserContext);
	
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
								<img src={ currentUser.avatar }
									 alt={ currentUser.name[0] }
									 className="header__avatar" />
							</div>
						</Link>
					</div>
				)
				:
				(
					<div className="header__user-container">
						<ToggleSwitch />
						<button onClick={handleRegisterClick} type="button" className="header__signup-btn">Sign Up</button>
						<button onClick={handleLoginClick} type="button" className="header__login-btn">Log In</button>
					</div>
				)
			}
				
			

		</div>
	);
}

export default Header;
