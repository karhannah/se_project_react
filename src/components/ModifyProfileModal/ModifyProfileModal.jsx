import React, { useState, useEffect, useContext } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx"
import { CurrentUserContext } from "../../utils/Contexts/CurrentUserContext";

const ModifyProfileModal = ({ activeModal, onClose, onModifyProfile }) => {
	const { currentUser, handleUserChange } = useContext(CurrentUserContext);
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

	useEffect(() => {
		setName(currentUser.name);
		setAvatar(currentUser.name);
	}, [])
	
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
					   id="modify-profile__name"
					   placeholder="Name"
					   value = { name }
					   onChange = { handleNameChange } />
	 		</label>
			
	 		<label htmlFor="avatar" className="modal__label">Avatar URL{" "}
	 			<input type="text"
					   className="modal__input"
					   id="modify-profile__avatar"
					   placeholder="Avatar URL"
				       value = { avatar }
				       onChange = { handleAvatarChange }/>
	 		</label>
			
	 	</ModalWithForm>
	);
}

export default ModifyProfileModal;
