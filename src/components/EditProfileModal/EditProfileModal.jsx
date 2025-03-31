import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx"

const EditProfileModal = ({ activeModal, onClose, onSubmit }) => {
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
		onSubmit({ name, avatar });
	}
	
	return (
	 	<ModalWithForm title = "Edit Profile"
	 				   buttonText = "Save Changes"
	 				   activeModal = { activeModal }
	 				   onClose = { onClose }
	 				   isOpen = { activeModal === "modify-profile" }
					   onSubmit = { handleSubmit }
	 	>			
	 		<label htmlFor="name" className="modal__label">Username *{" "}
	 			<input type="name"
					   className="modal__input"
					   id="name"
					   placeholder="Username"
				       value = { name }
				       onChange = { handleNameChange }/>
	 		</label>

			<label htmlFor="avatar" className="modal__label">Avatar *{" "}
	 			<input type="avatar"
					   className="modal__input"
					   id="avatar"
					   placeholder="Avatar"
					   value = { avatar }
					   onChange = { handleAvatarChange } />
	 		</label>
			
	 	</ModalWithForm>
	);
}

export default EditProfileModal;
