import ClothesSection from "../ClothesSection/ClothesSection.jsx";
import SideBar from "../Sidebar/Sidebar.jsx";
import "./Profile.css";

const Profile = ({ handleAddClick, onCardClick, clothingItems }) => {
	return (
		<div className = "profile">
			<section className = "profile__sidebar">
				<SideBar />
			</section>

			<section className = "profile__clothing-items">
				<ClothesSection handleAddClick = { handleAddClick }
								onCardClick = { onCardClick }
								clothingItems = { clothingItems } />
			</section>			
		</div>
	);
}

export default Profile;
