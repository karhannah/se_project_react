import ClothesSection from "../ClothesSection/ClothesSection.jsx";
import SideBar from "../Sidebar/Sidebar";
import "./Profile.css";

const Profile = ({ onCardClick, clothingItems }) => {
	return (
		<div className = "profile">
			<section className = "profile__sidebar">
				<SideBar />
			</section>

			<section className = "profile__clothing-items">
				<ClothesSection onCardClick = { onCardClick }
								clothingItems = { clothingItems } />
			</section>			
		</div>
	);
}

export default Profile;
