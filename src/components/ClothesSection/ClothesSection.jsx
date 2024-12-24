import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";

const ClothesSection = ({ handleAddClick, onCardClick, clothingItems }) => {
	return (
		<div className = "clothes-section">
			<div className = "clothes-section__wrapper">
				<div class = "section__controls">
					<p class = "controls__label">Your Items</p>
					<button class = "controls__add-new" onClick={ handleAddClick }>+ Add New</button>
				</div>
				<ul className="clothes-section__items card__container">
					{clothingItems
						.map((item) => {
							return (
								<ItemCard key={item._id}
									item={item}
									onCardClick={onCardClick}
								/>);
						})}
					<div className = "newcard">
						<ItemCard key = { -1 }
								  cardId = { -1 }
								  item = { { _id: -1, imageUrl: "", name: "", weather: "" } }
								  onCardClick = { onCardClick }
						/>
					</div>
				</ul>
			</div>
		</div>
	);
}

export default ClothesSection;
