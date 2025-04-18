import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx"

const AddItemModal = ({ activeModal, onClose, onAddItem }) => {
	const [name, setName] = useState("");
	const [imageUrl, setUrl] = useState("");
	const [weather, setWeather] = useState();

	const handleNameChange = (e) => {
		setName(e.target.value);
	}

	const handleUrlChange = (e) => {
		setUrl(e.target.value);
	}

	const handleRadioChange = (e) => {
		setWeather(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		onAddItem({ name, imageUrl, weather });
	}
	
	return (
	 	<ModalWithForm title = "New garment"
	 				   buttonText = "Add Garment"
	 				   activeModal = { activeModal }
	 				   onClose = { onClose }
	 				   isOpen = { activeModal === "add-garment" }
					   onSubmit = { handleSubmit }
	 	>
			<label className="modal__label">Name{" "}
	 			<input type="text"
					   className="modal__input"
					   id="add-item__name"
					   placeholder="Name"
					   value = { name }
					   onChange = { handleNameChange } />
	 		</label>
			
	 		<label className="modal__label">Image{" "}
	 			<input type="text"
					   className="modal__input"
					   id="add-item__imageUrl"
					   placeholder="Image URL"
				       value = { imageUrl }
				       onChange = { handleUrlChange }/>
	 		</label>
			
	 		<fieldset className="modal__radio-buttons">
	 			<legend className="modal__legend">Select the weather type:</legend>
	 			<label className="modal__label modal__label_type_radio">
	 				<input name = "weatherType"
						   id="add-item__hot"
						   type="radio"
						   value="hot"
						   className="modal__radio-input"
					       onChange = { handleRadioChange } /> Hot
	 			</label>
				
	 			<label className="modal__label modal__label_type_radio">
	 				<input name = "weatherType"
						   id="add-item__warm"
						   type="radio"
						   value="warm"
						   className="modal__radio-input"
						   onChange = { handleRadioChange } /> Warm
	 			</label>
				
	 			<label className="modal__label modal__label_type_radio">
	 				<input name = "weatherType"
						   id="add-item__cold"
						   type="radio"
						   value="cold"
						   className="modal__radio-input"
						   onChange = { handleRadioChange } /> Cold
	 			</label>
	 		</fieldset>
	 	</ModalWithForm>
	);
}

export default AddItemModal;
