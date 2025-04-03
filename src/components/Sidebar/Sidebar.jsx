import "./Sidebar.css";
import avatar from "../../assets/avatar.png";
import { useContext } from "react";
import { CurrentUserContext } from "../../utils/Contexts/CurrentUserContext";

const SideBar = ({ onModifyProfileClick, onSignoutClick }) => {
	const { currentUser, handleUserChange } = useContext(CurrentUserContext);
	
	return (
		<div className = "sidebar">
			<div className = "sidebar__profile">
				<img className = "sidebar__avatar" src = { currentUser.avatar } alt = { currentUser.name[0] } />
				<p className = "sidebar__username">{ currentUser.name }</p>
			</div>
			<button type = "button" onClick = { onModifyProfileClick } className = "sidebar__button">Modify Profile</button>
			<button type = "button" onClick = { onSignoutClick } className = "sidebar__button">Sign Out</button>
		</div>
	);
}

export default SideBar;
