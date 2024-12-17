import './ItemCard.css'

function ItemCard({ cardId, item, onCardClick }) {	
	const handleCardClick = () => {
		onCardClick(item);
	}
	
	return (
		<li className = "card" id = { `card__${ item._id }` }>
			<h2 className = "card__name">{ item.name }</h2>
			<img onClick = { handleCardClick } 
				 className = "card__image"
				 src = {item.imageUrl}
				 alt = {item.name} />
			
		</li>
	);
}

export default ItemCard;
