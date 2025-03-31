import './ItemCard.css';

import { useContext } from 'react';

import { CurrentUserContext } from "../../utils/Contexts/CurrentUserContext.jsx";

function ItemCard({ cardRef, cardId, item, onCardClick, onCardLike }) {
	const { currentUser, isLoggedIn } = useContext(CurrentUserContext);
	
	const handleCardClick = () => {
		onCardClick(item);
	}

	const isLiked = item.likes.some(id => id === currentUser._id);

	const handleLike = () => {
		onCardLike({ id: item._id, isLiked });
	}
	
	return (
		<li ref = { cardRef } className = "card" id = { `card__${ item._id }` }>
			<img onClick = { handleCardClick } 
				 className = "card__image"
				 src = { item.imageUrl }
				 alt = { item.name } />
			<div className = "card__info-container"> {/* This is going to contain &#10084; the two of these, change the positioning css to move it */}
				<h2 className="card__name">{ item.name }</h2>
				{
					isLoggedIn && (
						isLiked ? 
						( <button onClick={ handleLike } className="card__like-solid">&#10084;</button> )
						:
						( <button onClick={ handleLike } className="card__like-empty"></button> )
					)
					// A temporary test until I fully do the like button
				}
			</div>
			
		</li>
	);
}

export default ItemCard;
