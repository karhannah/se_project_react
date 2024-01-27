import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";
import "./Profile.css";
const Profile = ({
  onClick,
  onCreate,
  clothingItems,
  onSelectCard,
  onCardLike,
  logout,
  handleOpenModal,
}) => {
  return (
    <div className="profile">
      <SideBar
        onClick={onClick}
        logout={logout}
        handleOpenModal={handleOpenModal}
      />
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
