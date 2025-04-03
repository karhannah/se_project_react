import "./ItemModal.css"
import { useContext } from "react";
import { CurrentUserContext } from "../../utils/Contexts/CurrentUserContext";

function ItemModal({ activeModal, onClose, card, onDeleteItem }) {
	const { currentUser, handleUserChange } = useContext(CurrentUserContext);
	
	return (
		<div className = { `modal ${ activeModal === "preview" ? "modal__opened" : "" }` }>
			<div className = "modal__content modal__content_type_image">
				<button onClick = { onClose } className = "modal__close" ></button>
				<img src = { card.imageUrl } alt = { card.name } className = "modal__image" />
				<div className = "modal__footer">
					<div className = "modal__footer-subcontainer">
						<h2 className = "modal__caption">{ card.name }</h2>
						{ currentUser._id === card.owner &&
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
