import ItemCard from "../ItemCard/ItemCard";

const ClothesSection = ({ onSelectCard, setClothingItems }) => {
  const filteredCards = setClothingItems.filter((item) => {
    return item.weather;
  });
  return (
    <div className="profile__card-items">
      {filteredCards.map((item) => (
        <ItemCard item={item} onSelectCard={onSelectCard} key={item._id} />
      ))}
    </div>
  );
};

export default ClothesSection;
