import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";
import React from "react";

const ClothesSection = ({ handleAddClick, onCardClick, clothingItems }) => {
	
	return (
		<div className = "clothes-section">
			<div className = "clothes-section__wrapper">
				<div className = "section__controls">
					<p className = "controls__label">Your Items</p>
					<button className = "controls__add-new" onClick={ handleAddClick }>+ Add New</button>
				</div>
				<ul className="clothes-section__items card__container">
					{ clothingItems.filter((item) => {
						return true;
					} ).reverse().map((item) => {

						item.cardRef = React.createRef();

						return (
							<ItemCard cardRef={ item.cardRef }
								key={item._id}
								cardId={item._id}
								item={item}
								onCardClick={onCardClick}
							/>);
					  } ) }
				</ul>
			</div>
		</div>
	);
}

export default ClothesSection;
