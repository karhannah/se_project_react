import ModalWithForm from "../ModalWithForm/ModalWithForm";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as auth from "../../utils/auth";

const Login = ({ setIsLoggedIn, handleCloseModal, onClick }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  // experimental
  const handleChange = (e) => {
    console.log(e.target.value);
    setValues(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.email || !values.password) {
      return;
    }
    auth
      .authorize(values.email, values.password)
      .then((res) => {
        console.log(res);
        setIsLoggedIn(true);
      })
      .catch(console.log);
  };
  return (
    <ModalWithForm title="Login" onClose={handleCloseModal} onClick={onClick}>
      <div className="login">
        <p className="login__welcome"></p>
        <form className="login__form" onSubmit={handleSubmit}>
          <label for="email">
            {"Email: "}
            <input id="email" required name="email" onChange={handleChange} />
          </label>
          <label for="password">
            {"Password: "}
            <input
              id="password"
              required
              name="password"
              onChange={handleChange}
            />
          </label>
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
