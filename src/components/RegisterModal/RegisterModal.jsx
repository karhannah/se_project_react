import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import "./RegisterModal.css";

const RegisterModal = ({ activeModal, onClose, onRegister }) => {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [avatar, setAvatar] = useState("");
	const [password, setPassword] = useState("");

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	}

	const handleUsernameChange = (e) => {
		setName(e.target.value);
	}

	const handleAvatarChange = (e) => {
		setAvatar(e.target.value);
	}

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		onRegister({ email, name, avatar, password });
	}
	
	return (
	 	<ModalWithForm title = "Register"
	 				   buttonText = "Register"
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
				       onChange = { handleEmailChange }/>
	 		</label>

			<label htmlFor="password" className="modal__label">Password *{" "}
	 			<input type="password"
					   className="modal__input"
					   id="password"
					   placeholder="Password"
					   value = { password }
					   onChange = { handlePasswordChange } />
	 		</label>

			<label htmlFor="username" className="modal__label">Name *{" "}
	 			<input type="text"
					   className="modal__input"
					   id="name"
					   placeholder="Name"
				       value = { name }
				       onChange = { handleUsernameChange }/>
	 		</label>

			<label htmlFor="avatar" className="modal__label">Avatar URL*{" "}
	 			<input type="text"
					   className="modal__input"
					   id="avatar"
					   placeholder="Avatar URL"
					   value = { avatar }
					   onChange = { handleAvatarChange } />
	 		</label>
			
	 	</ModalWithForm>
	);
}

export default RegisterModal;
