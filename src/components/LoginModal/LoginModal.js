import ModalWithForm from "../ModalWithForm/ModalWithForm";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as auth from "../../utils/auth";
import "./LoginModal.css";

const Login = ({ setLoggedIn, handleCloseModal, onClick }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  // experimental
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const setIsLoggedIn = (e) => {
    setLoggedIn(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.email || !values.password) {
      return;
    }
    auth
      .authorize(values.email, values.password)
      .then((res) => {
        // console.log(res);
        setIsLoggedIn(res);
      })
      .catch(console.log);
  };
  return (
    <ModalWithForm
      title="Log in"
      onClose={handleCloseModal}
      onClick={onClick}
      buttonText={
        <Link
          to="profile"
          onClick={handleSubmit}
          className="login__button-login"
        >
          Log in
        </Link>
      }
    >
      <div className="login">
        <div className="login__form" onSubmit={handleSubmit}>
          <label>{"Email "}</label>
          <input
            className="login__form-input"
            name="email"
            id="email"
            required
            onChange={handleChange}
            value={values.email}
          />
          <label>{"Password "}</label>
          <input
            className="login__form-input"
            name="password"
            id="password"
            required
            onChange={handleChange}
            value={values.password}
          />
          <div className="login__button-container"></div>
        </div>
        <div className="login__signup">
          <Link to="/register" className="signup__link">
            or Register
          </Link>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default Login;

{
  /* <button type="submit" className="login__link">
              Log in
            </button> */
}
