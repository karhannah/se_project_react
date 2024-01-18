import ModalWithForm from "../ModalWithForm/ModalWithForm";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as auth from "../../utils/auth";

// here I want to export it in the same line it was made
// if i can't seem to do that export it normally

// pass in arguments for events in register = ()
const Register = ({ handleCloseModal, onClick, onRegister }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // here I am trying to handle all changes at once instead
  // of creating separate funcitons for the change evt
  // if it doesn't work seperate them as done in addItemModal.js

  const handleInputChanges = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
    setEmail(e.target.value);
    setPassword(e.target.value);
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      auth
        .register(name, email, password)
        .then((res) => console.log(res))
        .catch(console.log);
    }
  };
  return (
    // add events to the form inside of the <> on ModalWithForm
    <ModalWithForm
      title="Register"
      onClose={handleCloseModal}
      onClick={onClick}
    >
      <div className="register">
        <p className="register__welcome">Please register.</p>
        <form className="register__form">
          <label>Username:</label>
          <input
            name="username"
            type="text"
            value={name}
            onChange={handleInputChanges}
          />
          <label>Email:</label>
          <input
            name="email"
            type="email"
            value={email}
            onChange={handleInputChanges}
          />
          <label>Password:</label>
          <input
            name="password"
            type="password"
            value={password}
            onChange={handleInputChanges}
          />
          <label>Confirm Password:</label>
          <input
            name="confirm-password"
            type="password"
            value={confirmPassword}
            onChange={handleInputChanges}
          />
        </form>
        <div className="register__button-container">
          <button onClick={handleSubmit} className="register__link">
            Sign Up
          </button>
        </div>
        <div className="register__signin">
          <p>Already a member?</p>
          <Link to="login" className="register__login-link">
            Log in here
          </Link>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default Register;
