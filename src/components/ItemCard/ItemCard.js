import "./ItemCard.css";
import heartButton from "../../images/heartButton.svg";

const ItemCard = ({ item, onSelectCard, onCardLike, loggedIn }) => {
  const handleLike = () => {
    onCardLike({ id: item._id, isLiked: !item.isLiked });
  };

  const likeButtonClassName = `card_like ${
    item.isLiked ? "card_like-visible" : "card_like-hidden"
  }`;

  return (
    <div>
      <div>
        <img
          src={item.imageUrl}
          className="card_image"
          onClick={() => onSelectCard(item)}
          alt={item.name}
        />
      </div>
      <div className="card_name">{item.name} </div>

      {loggedIn ? (
        <img
          className={likeButtonClassName}
          src={heartButton}
          onClick={handleLike}
        />
      ) : (
        <img />
      )}
    </div>
  );
};

export default ItemCard;
