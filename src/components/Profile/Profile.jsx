import ClothesSection from "../ClothesSection/ClothesSection.jsx";
import SideBar from "../Sidebar/Sidebar.jsx";
import "./Profile.css";
import { CurrentUserContext } from "../../utils/Contexts/CurrentUserContext";
import { useContext } from 'react';

const Profile = ({ handleAddClick, onCardClick, onCardLike, handleModifyProfile, handleSignout, clothingItems }) => {
	const { currentUser, isLoggedIn } = useContext(CurrentUserContext);
	
	return (
		<div className = "profile">
			<section className = "profile__sidebar">
				<SideBar handleModifyProfile = { handleModifyProfile }
						 handleSignout = { handleSignout }/>
			</section>

			<section className = "profile__clothing-items">
				<ClothesSection handleAddClick = { handleAddClick }
								onCardClick = { onCardClick }
								onCardLike = { onCardLike }
								clothingItems = { clothingItems } />
			</section>			
		</div>
	);
}

export default Profile;
