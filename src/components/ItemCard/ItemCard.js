import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard, onCardLike }) => {
  const handleLike = () => {
    onCardLike({ id: item._id, isLiked: !item.isLiked });
  };

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
      <div className="card_name">{item.name}</div>
      <button className="card_name" onClick={handleLike}>
        like button
      </button>
    </div>
  );
};

export default ItemCard;
