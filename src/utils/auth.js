import { baseUrl } from "./api";
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
    .then((userData) => {
      if (userData.message) {
        throw new Error(userData.message);
      }
      console.log(userData.message);
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
    .then((userData) => {
      if (userData.token) {
        localStorage.setItem("token", userData.token);
        console.log(userData.token);
        return userData.token;
      } else {
        console.log(userData);
        throw new Error(userData.message);
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
    .then((userData) => {
      console.log(userData);
      return userData.data;
    });
};
