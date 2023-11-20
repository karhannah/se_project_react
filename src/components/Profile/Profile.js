import AvatarLogo from "../../images/headerAvatar.svg";
import { defaultClothingItems } from "../../utils/Constants";
import ItemCard from "../ItemCard/ItemCard";
import "./Profile.css";
const Profile = ({ onCreate, onSelectCard }) => {
  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase();
  });
  return (
    <div>
      <div className="profile">
        <div className="profile__logo">
          <img className="profile__avatar-logo" src={AvatarLogo} alt="Avatar" />
          <div className="profile__user-name">Terrence Tegegne</div>
        </div>
        {/*  */}
        <div className="profile__items-text">
          Your Items
          <button
            className="profile__add-button"
            onClick={onCreate}
            type="button"
          >
            + add new
          </button>
        </div>
        <div>
          <div className="profile__card-items">
            {filteredCards.map((item) => (
              <ItemCard
                item={item}
                onSelectCard={onSelectCard}
                key={item._id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
