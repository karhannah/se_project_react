import ModalWithForm from "../ModalWithForm/ModalWithForm";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./RegisterModal.css";
import * as auth from "../../utils/auth";
// here I want to export it in the same line it was made
// if i can't seem to do that export it normally

// pass in arguments for events in register = ()
const Register = ({
  isLoggedIn,
  handleCloseModal,
  onClick,
  setCurrentUser,
}) => {
  const history = useHistory();

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });
  // confirmPassword: "",

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    console.log(values);
  };

  // Register.js
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Values before registration:", values);
    try {
      const userData = await auth.register(values);
      console.log("UserData received after registration:", userData);

      setCurrentUser(userData);
      isLoggedIn(true);
      const email = values.email;
      history.push(`/profile/${email}`);
    } catch (err) {
      console.error("Error during registration: ", err);
    }
  };

  return (
    // add events to the form inside of the <> on ModalWithForm
    <ModalWithForm
      title="Sign up"
      onClose={handleCloseModal}
      buttonText={
        <div onClick={handleSubmit} className="register__profile-link">
          Next
        </div>
      }
    >
      <div className="register">
        <div className="register__form">
          <label>{"Name "}</label>
          <input
            required
            className="register__form-input"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
          />
          <label>{"Email "}</label>
          <input
            required
            className="register__form-input"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
          />
          <label>{"Password "}</label>
          <input
            required
            className="register__form-input"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
          />
          <label>{"Avatar URL "}</label>
          <input
            required
            className="register__form-input"
            name="avatar"
            type="URL"
            value={values.avatar}
            onChange={handleChange}
          />
        </div>
        <div className="register__signin">
          <Link
            to="login"
            onClick={() => onClick("login")}
            className="register__login-link"
          >
            or Log in
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
// if (values.password === values.confirmPassword) {
//   onRegister(values);
// }
// };

// removed for use later
{
  /* <label>
            {"Confirm Password: "}
            <input
              name="confirmPassword"
              type="password"
              value={values.confirmPassword}
              onChange={handleChange}
            />
          </label> */
}
