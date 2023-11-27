import ItemCard from "../ItemCard/ItemCard";
import { useState } from "react";

const ClothesSection = ({ onSelectCard, clothingItems }) => {
  const filteredCards = clothingItems.filter((item) => {
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
