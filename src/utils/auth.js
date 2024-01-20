import { processServerResponse } from "./utils";
import { baseUrl } from "./api";
import { useHistory } from "react-router-dom";
// const BASE_URL = "https://register.localhost:3001";
// project 14 registration
export const register = ({ name, email, password, avatar }) => {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password, avatar }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.message) {
        throw new Error(data.message);
      }
      console.log(data.message);
    });
};

// project 14 login
export const authorize = (email, password) => {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.token) {
        localStorage.setItem("token", data.token);
        return data;
      } else {
        throw new Error(data.message);
      }
    });
};

export const checkToken = (token) => {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => data);
};
