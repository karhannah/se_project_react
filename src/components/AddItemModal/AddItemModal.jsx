import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx"

const AddItemModal = ({ activeModal, onClose, onAddItem }) => {
	const [name, setName] = useState();
	const [link, setUrl] = useState();

	const handleNameChange = (e) => {
		setName(e.target.value);
	}

	const handleUrlChange = (e) => {
		setUrl(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		onAddItem({ name, link });
	}
	
	return (
	 	<ModalWithForm title = "New garment"
	 				   buttonText = "Add Garment"
	 				   activeModal = { activeModal }
	 				   onClose = { onClose }
	 				   isOpen = { activeModal === "add-garment" }
					   onSubmit = { handleSubmit }
	 	>
	 		<label htmlFor="name" className="modal__label">Name{" "}
	 			<input type="text"
					   className="modal__input"
					   id="name"
g					   placeholder="Name"
					   value = { name }
					   onChange = { handleNameChange } />
	 		</label>
	 		<label htmlFor="imageUrl" className="modal__label">Image{" "}
	 			<input type="text"
					   className="modal__input"
					   id="imageUrl"
					   placeholder="Image URL"
				       value = { link }
				       onChange = { handleUrlChange }/>
	 		</label>
	 		<fieldset className="modal__radio-buttons">
	 			<legend className="modal__legend">Select the weather type:</legend>
	 			<label htmlFor = "hot" className="modal__label modal__label_type_radio">
	 				<input name = "weatherType"
						   id="hot"
						   type="radio"
						   className="modal__radio-input" /> Hot
	 			</label>
	 			<label htmlFor = "warm" className="modal__label modal__label_type_radio">
	 				<input name = "weatherType"
						   id="warm"
						   type="radio"
						   className="modal__radio-input" /> Warm
	 			</label>
	 			<label htmlFor = "cold" className="modal__label modal__label_type_radio">
	 				<input name = "weatherType"
						   id="cold"
						   type="radio"
						   className="modal__radio-input" /> Cold
	 			</label>
	 		</fieldset>
	 	</ModalWithForm>
	);
}

export default AddItemModal;
