import "./Sidebar.css";
import avatar from "../../assets/avatar.png";
import { CurrentUserContext } from "../../utils/Contexts/CurrentUserContext";
import { useContext } from 'react';

const SideBar = ({ handleModifyProfile, handleSignout }) => {
	const { currentUser, isLoggedIn } = useContext(CurrentUserContext);
	
	const handleModifyProfileClick = () => {
		handleModifyProfile();
	}
	
	const handleSignoutClick = () => {
		handleSignout();
	}
	
	return (
		<div className = "sidebar">
			<div className = "sidebar__user-container">
				<img className = "sidebar__avatar" src = { currentUser.avatar } alt = { currentUser.name[0] } />
				<p className = "sidebar__username">{ currentUser.name }</p>
			</div>
			<button className = "sidebar__modify-profile" onClick = { handleModifyProfileClick }>Edit Profile</button>
			<button className = "sidebar__signout" onClick = { handleSignoutClick }>Sign Out</button>
		</div>
	);
}

export default SideBar;
