import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";

const ClothesSection = ({ onCardClick, clothingItems }) => {
	return (
		<div className = "clothes-section">
			<div>
				<p>Your Items</p>
				<button>+ Add New</button>
				<ul className = "clothes-section__items">
					{ clothingItems
					  .map((item) => {
						  return (
							  <ItemCard key = { item._id }
										item = { item }
							            onCardClick = { onCardClick }
							   />);
					} ) }
				</ul>
			</div>
		</div>
	);
}

export default ClothesSection;
