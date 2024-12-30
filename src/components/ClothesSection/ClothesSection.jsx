import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";

const ClothesSection = ({ handleAddClick, onCardClick, clothingItems }) => {
	return (
		<div className = "clothes-section">
			<div className = "clothes-section__wrapper">
				<div className = "section__controls">
					<p className = "controls__label">Your Items</p>
					<button className = "controls__add-new" onClick={ handleAddClick }>+ Add New</button>
				</div>
				<ul className="clothes-section__items card__container">
					{ clothingItems
					  .toReversed().map((item) => {
							return (
								<ItemCard key={item._id}
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
