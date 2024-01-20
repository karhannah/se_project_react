import { processServerResponse } from "./utils";

export const baseUrl = "http://localhost:3001";
// GET https://localhost:3001/items

export function request(url, options) {
  return fetch(url, options).then(processServerResponse);
}

export function getItems() {
  return fetch(`${baseUrl}/items`, {
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${localStorage.getItem("")}
    },
  }).then(processServerResponse);
}

// POST https://localhost:3001/items

export function postItems(values, token) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(values),
  }).then(processServerResponse);
}

// DELETE https://localhost:3001/items/:id

export function deleteItems(id, token) {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(processServerResponse);
}

// create function for getting the current user
export function getCurrentUser(userId) {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    body: JSON.stringify(userId),
  }).then(processServerResponse);
}

// start db.json with this > json-server --watch db.json --id _id --port 3001
