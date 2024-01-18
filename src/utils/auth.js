import { processServerResponse } from "./utils";
import { baseUrl } from "./api";
// project 14 registration
export const register = (name, avatar, email, password) => {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, avatar, email, password }),
    // not sure if I have to put the arguments above ins specific order
  })
    .then(processServerResponse)
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
};

// project 14 login
export const authorize = (email, password) => {
  return fetch(`${baseUrl}/signing`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then(processServerResponse)
    .then((data) => {
      if (data.token) {
        localStorage.setItem("token", data.token);
        return data;
      }
    })
    .catch((err) => console.log(err));
};
