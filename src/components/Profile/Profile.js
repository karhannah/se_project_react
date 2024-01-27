import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";
import "./Profile.css";
const Profile = ({
  onClose,
  onClick,
  onCreate,
  clothingItems,
  onSelectCard,
  onCardLike,
}) => {
  return (
    <div className="profile">
      <SideBar onClick={onClick} onClose={onClose} />
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
        <ClothesSection
          clothingItems={clothingItems}
          onSelectCard={onSelectCard}
          onCardLike={onCardLike}
        />
      </div>
    </div>
  );
};

export default Profile;
