import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import "./LoginModal.css";

const LoginModal = ({ activeModal, handleRegisterClick, onClose, onLogin }) => {
	const [ email, setEmail ] = useState("");
	const [ password, setPassword ] = useState("");

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	}

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		onLogin({ email, password });
	}

	const handleSignupClick = (e) => {
		handleRegisterClick();
	}
	
	return (
	 	<ModalWithForm title = "Log In"
	 				   buttonText = "Log In"
	 				   activeModal = { activeModal }
	 				   onClose = { onClose }
	 				   isOpen = { activeModal === "login" }
					   onSubmit = { handleSubmit }
	 	>
			<label className="modal__label">Email{" "}
	 			<input type="email"
					   className="modal__input"
					   id="login__email"
					   placeholder="Email"
					   value = { email }
					   onChange = { handleEmailChange } />
	 		</label>
			
	 		<label className="modal__label">Password{" "}
	 			<input type="password"
					   className="modal__input"
					   id="login__password"
					   placeholder="Password"
				       value = { password }
				       onChange = { handlePasswordChange }/>
	 		</label>

			<button type = "button" className = "login__signup-btn" onClick = { handleSignupClick }>or Sign Up</button>
	 	</ModalWithForm>
	);
}

export default LoginModal;
