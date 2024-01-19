import ModalWithForm from "../ModalWithForm/ModalWithForm";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as auth from "../../utils/auth";

// here I want to export it in the same line it was made
// if i can't seem to do that export it normally

// pass in arguments for events in register = ()
const Register = ({ handleCloseModal, onClick, onRegister }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.password === values.confirmPassword) {
      auth
        .register(values.name, values.email, values.password)
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
      // onSubmit={handleSubmit}
    >
      <div className="register">
        <p className="register__welcome">Please register.</p>
        <form className="register__form">
          <label>
            {"UserName: "}
            <input
              name="name"
              type="text"
              value={values.name}
              onChange={handleChange}
            />
          </label>
          <label>
            {"Email: "}
            <input
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
            />
          </label>
          <label>
            {"Password: "}
            <input
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
            />
          </label>
          <label>
            {"Confirm Password: "}
            <input
              name="confirmPassword"
              type="password"
              value={values.confirmPassword}
              onChange={handleChange}
            />
          </label>
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

// const handleSubmit = (e) => {
//   e.preventDefault();
//   if (password === confirmPassword) {
//     auth
//       .register(name, email, password)
//       .then((res) => console.log(res))
//       .catch(console.log);
//   }
// };
