import ModalWithForm from "../ModalWithForm/ModalWithForm";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as auth from "../../utils/auth";

const Login = ({ setIsLoggedIn, handleCloseModal, onClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // experimental
  const handleInputChanges = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    auth
      .authorize(email, password)
      .then((res) => {
        console.log(res);
        setIsLoggedIn(true);
      })
      .catch(console.log);
  };
  return (
    <ModalWithForm title="Login" onClose={handleCloseModal} onClick={onClick}>
      <div className="login">
        <p className="login__welcome">Please login</p>
        <form className="login__form" onSubmit={handleSubmit}>
          <label for="email">Email:</label>
          <input
            id="email"
            required
            name="email"
            onChange={handleInputChanges}
          />
          <label for="password">Password:</label>
          <input
            id="password"
            required
            name="password"
            onChange={handleInputChanges}
          />
          <div className="login__button-container">
            <button type="submit" className="login__link">
              Log in
            </button>
          </div>
        </form>
        <div className="login__signup">
          <p>Not a member yet?</p>
          <Link to="/register" className="signup__link">
            Sign up here
          </Link>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default Login;
