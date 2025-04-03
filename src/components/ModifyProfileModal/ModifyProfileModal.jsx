import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx"

const ModifyProfileModal = ({ activeModal, onClose, onModifyProfile }) => {
	const [name, setName] = useState("");
	const [avatar, setAvatar] = useState("");

	const handleNameChange = (e) => {
		setName(e.target.value);
	}

	const handleAvatarChange = (e) => {
		setAvatar(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		onModifyProfile({ name, avatar });
	}
	
	return (
	 	<ModalWithForm title = "Modify Profile"
	 				   buttonText = "Modify Profile"
	 				   activeModal = { activeModal }
	 				   onClose = { onClose }
	 				   isOpen = { activeModal === "modify-profile" }
					   onSubmit = { handleSubmit }
	 	>
			<label htmlFor="name" className="modal__label">Name{" "}
	 			<input type="text"
					   className="modal__input"
					   id="name"
					   placeholder="Name"
					   value = { name }
					   onChange = { handleNameChange } />
	 		</label>
			
	 		<label htmlFor="avatar" className="modal__label">Avatar URL{" "}
	 			<input type="text"
					   className="modal__input"
					   id="avatar"
					   placeholder="Avatar URL"
				       value = { avatar }
				       onChange = { handleAvatarChange }/>
	 		</label>
			
	 	</ModalWithForm>
	);
}

export default ModifyProfileModal;
