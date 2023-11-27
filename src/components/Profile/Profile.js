import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";
import "./Profile.css";
const Profile = ({ onCreate, clothingItems }) => {
  return (
    <div>
      <div className="profile">
        <SideBar />
        <div className="profile__items-container">
          <div className="profile__items-text">
            Your Items
            <button
              className="profile__add-button"
              onClick={onCreate}
              type="button"
            >
              + Add new
            </button>
          </div>
          <ClothesSection clothingItems={clothingItems} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
