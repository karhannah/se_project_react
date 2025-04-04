import "./ModalWithForm.css";
import { useModalClose } from '../../utils/useModalClose';

function ModalWithForm({ children, buttonText, title, onClose, isOpen, onSubmit }) {
	useModalClose(isOpen, onClose);
	
	return (
		<div className = { `modal ${ isOpen ? "modal__opened" : "" }` }>
			<div className = "modal__content modal__content_type_form">
				<h2 className="modal__title">{ title }</h2>
				<button onClick = { onClose } type="button" className="modal__close"></button>
				<form className="modal__form" onSubmit = { onSubmit }>
					{ children }
					<button type = "submit" className = "modal__submit">{ buttonText }</button>
				</form>
			</div>
		</div>
	); 
}

export default ModalWithForm;

