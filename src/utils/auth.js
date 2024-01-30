import { baseUrl } from "./api";
// project 14 registration
export const register = async ({ name, email, password, avatar }) => {
  const res = await fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password, avatar }),
  });
  const userData = await res.json();
  if (!userData) {
    throw new Error("Error from register: ", userData);
  }
  console.log(userData);
};

// project 14 login
export const authorize = async (email, password) => {
  const res = await fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const userData = await res.json();
  if (userData.token) {
    localStorage.setItem("token", userData.token);
    return userData.token;
  } else {
    throw new Error("Error from authorize: ", userData);
  }
};

export const checkToken = async (token) => {
  const res = await fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const userData = await res.json();
  return userData.data;
};
