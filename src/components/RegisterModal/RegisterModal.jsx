import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import "./RegisterModal.css";

const RegisterModal = ({ activeModal, handleLoginClick, onClose, onRegister }) => {
	const [ email, setEmail ] = useState("");
	const [ password, setPassword ] = useState("");	
	const [ name, setName ] = useState("");
	const [ avatar, setAvatar ] = useState("");

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	}
	
	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	}
	
	const handleNameChange = (e) => {
		setName(e.target.value);
	}

	const handleAvatarChange = (e) => {
		setAvatar(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		onRegister({ email, password, name, avatar });
	}

	const handleLoginbtnClick = (e) => {
		handleLoginClick();
	}
	
	return (
	 	<ModalWithForm title = "Sign Up"
	 				   buttonText = "Sign Up"
	 				   activeModal = { activeModal }
	 				   onClose = { onClose }
	 				   isOpen = { activeModal === "register" }
					   onSubmit = { handleSubmit }
	 	>
			<label htmlFor="email" className="modal__label">Email *{" "}
	 			<input type="email"
					   className="modal__input"
					   id="email"
					   placeholder="Email"
					   value = { email }
					   onChange = { handleEmailChange } />
	 		</label>
			
	 		<label htmlFor="password" className="modal__label">Password *{" "}
	 			<input type="password"
					   className="modal__input"
					   id="password"
					   placeholder="Password"
				       value = { password }
				       onChange = { handlePasswordChange }/>
	 		</label>

			<label htmlFor="name" className="modal__label">Name *{" "}
	 			<input type="text"
					   className="modal__input"
					   id="name"
					   placeholder="Name"
				       value = { name }
				       onChange = { handleNameChange }/>
	 		</label>

			<label htmlFor="avatar" className="modal__label">Avatar URL *{" "}
	 			<input type="text"
					   className="modal__input"
					   id="avatar"
					   placeholder="Avatar URL"
				       value = { avatar }
				       onChange = { handleAvatarChange }/>
	 		</label>

			<button className = "register__signin-btn" onClick = { handleLoginbtnClick }>or Log In</button>
			
	 	</ModalWithForm>
	);
}

export default RegisterModal;
