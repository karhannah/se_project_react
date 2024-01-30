import ModalWithForm from "../ModalWithForm/ModalWithForm";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import * as auth from "../../utils/auth";
import "./LoginModal.css";

const Login = ({ isLoggedIn, handleCloseModal, onClick }) => {
  const history = useHistory();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.email || !values.password) {
      return;
    }
    auth
      .authorize(values.email, values.password)
      .then(() => {
        isLoggedIn(true);
        history.push("/profile");
      })
      .catch((error) => {
        if (error) {
          console.log(error);
          history.push("/register");
        } else {
          console.error(error.message);
        }
      });
  };

  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        console.log("Enter Key was pressed");
        event.preventDefault();
        handleSubmit();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [handleSubmit]);

  return (
    <ModalWithForm
      title="Log in"
      onClose={handleCloseModal}
      buttonText={
        <div onClick={handleSubmit} className="login__button-login">
          Log in
        </div>
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
          <Link
            to="/register"
            onClick={() => onClick("register")}
            className="signup__link"
          >
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
