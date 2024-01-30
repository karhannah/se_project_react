import ItemCard from "../ItemCard/ItemCard";
// conditionally render based on current owner
const ClothesSection = ({
  currentUser,
  onSelectCard,
  clothingItems,
  onCardLike,
}) => {
  const isOwn = currentUser._id;
  console.log(isOwn);

  const filteredCards = clothingItems.filter((item) => {
    // return item.weather;
    console.log(item.owner);
    return item.owner === isOwn;
  });

  return (
    <div className="profile__card-items">
      {filteredCards.map((item) => (
        <ItemCard
          item={item}
          onSelectCard={onSelectCard}
          key={item._id}
          onCardLike={onCardLike}
        />
      ))}
    </div>
  );
};

export default ClothesSection;
