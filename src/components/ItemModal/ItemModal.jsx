import "./ItemModal.css"
import { CurrentUserContext } from "../../utils/Contexts/CurrentUserContext";
import { useContext } from 'react';

function ItemModal({ activeModal, onClose, card, onDeleteItem }) {
	const { currentUser, isLoggedIn } = useContext(CurrentUserContext);

	const isOwn = card.owner === currentUser._id;
	
	return (
		<div className = { `modal ${ activeModal === "preview" && "modal__opened" }` }>
			<div className = "modal__content modal__content_type_image">
				<button onClick = { onClose } className = "modal__close" ></button>
				<img src = { card.imageUrl } alt = { card.name } className = "modal__image" />
				<div className = "modal__footer">
					<div className = "modal__footer-subcontainer">
						<h2 className = "modal__caption">{ card.name }</h2>
						{
							isOwn &&
							(<button className = "modal__caption modal__delete" onClick = { onDeleteItem } >Delete Item</button>)
						}
					</div>
					<p className = "modal__weather">Weather: { card.weather }</p>
				</div>
			</div>
		</div>
	);
}

export default ItemModal;
