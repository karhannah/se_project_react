import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx"

const LoginModal = ({ activeModal, onClose, onLogin }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

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
	
	return (
	 	<ModalWithForm title = "Login"
	 				   buttonText = "Login"
	 				   activeModal = { activeModal }
	 				   onClose = { onClose }
	 				   isOpen = { activeModal === "login" }
					   onSubmit = { handleSubmit }
	 	>			
	 		<label htmlFor="email" className="modal__label">Email{" "}
	 			<input type="email"
					   className="modal__input"
					   id="email"
					   placeholder="Email"
				       value = { email }
				       onChange = { handleEmailChange }/>
	 		</label>

			<label htmlFor="password" className="modal__label">Password{" "}
	 			<input type="password"
					   className="modal__input"
					   id="password"
					   placeholder="Password"
					   value = { password }
					   onChange = { handlePasswordChange } />
	 		</label>
			
	 	</ModalWithForm>
	);
}

export default LoginModal;
