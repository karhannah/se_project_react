import ClothesSection from "../ClothesSection/ClothesSection.jsx";
import SideBar from "../Sidebar/Sidebar.jsx";
import "./Profile.css";

const Profile = ({ handleAddClick, onModifyProfileClick, onSignoutClick, onCardClick, onCardLike, clothingItems }) => {
	return (
		<div className = "profile">
			<section className = "profile__sidebar">
				<SideBar onModifyProfileClick = { onModifyProfileClick }
						 onSignoutClick = { onSignoutClick }
				/>
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
