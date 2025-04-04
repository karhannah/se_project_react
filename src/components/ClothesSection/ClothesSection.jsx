import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";
import { CurrentUserContext } from "../../utils/Contexts/CurrentUserContext";
import React from "react";

const ClothesSection = ({ handleAddClick, onCardClick, onCardLike, clothingItems }) => {
	const { currentUser, handleUserChange } = React.useContext(CurrentUserContext);
	
	return (
		<div className = "clothes-section">
			<div className = "clothes-section__wrapper">
				<div className = "section__controls">
					<p className = "controls__label">Your Items</p>
					<button className = "controls__add-new" onClick={ handleAddClick }>+ Add New</button>
				</div>
				<ul className="clothes-section__items card__container">
					{ clothingItems
					  .filter((item) => { return item.owner === currentUser._id; })
					  .map((item) => {

						item.cardRef = React.createRef();

						return (
							<ItemCard cardRef={ item.cardRef }
								key = { item._id }
								cardId = { item._id }
								item = { item }
								onCardClick = { onCardClick }
								onCardLike = { onCardLike }
							/>);
					  } ) }
				</ul>
			</div>
		</div>
	);
}

export default ClothesSection;
