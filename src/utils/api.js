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
  });
}

// POST https://localhost:3001/items

export function postItems() {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
// DELETE https://localhost:3001/items/:id

export function deleteItems() {
  return fetch(`${baseUrl}/items/:id`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
