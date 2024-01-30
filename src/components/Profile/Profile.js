import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";
import "./Profile.css";
const Profile = ({
  onClick,
  clothingItems,
  onSelectCard,
  onCardLike,
  isLoggedIn,
  handleOpenModal,
  currentUser,
  setCurrentUser,
}) => {
  return (
    <div className="profile">
      <SideBar
        onClick={() => onClick("edit")}
        isLoggedIn={isLoggedIn}
        handleOpenModal={handleOpenModal}
        setCurrentUser={setCurrentUser}
      />
      <div className="profile__items-container">
        <div className="profile__items-text">
          Your Items
          <button
            className="profile__add-button"
            onClick={() => onClick("create")}
            type="button"
          >
            + Add new
          </button>
        </div>
        <ClothesSection
          clothingItems={clothingItems}
          onSelectCard={onSelectCard}
          onCardLike={onCardLike}
          currentUser={currentUser}
        />
      </div>
    </div>
  );
};

export default Profile;
