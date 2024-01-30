import { processServerResponse } from "./utils";

export const baseUrl = "http://localhost:3001";

export async function request(url, options) {
  const res = await fetch(url, options);
  return processServerResponse(res);
}

export async function getItems() {
  const res = await fetch(`${baseUrl}/items`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return processServerResponse(res);
}

export async function postItems(values, token) {
  const res = await fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(values),
  });
  return processServerResponse(res);
}

export async function deleteItems(id, token) {
  const res = await fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return processServerResponse(res);
}

export async function likeCard(id, token) {
  try {
    const res = await fetch(`${baseUrl}/items/${id}/likes`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return processServerResponse(res);
  } catch (error) {
    console.error("Error adding like:", error);
    throw error;
  }
}

export async function likeRemove(id, token) {
  try {
    const res = await fetch(`${baseUrl}/items/${id}/likes`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return processServerResponse(res);
  } catch (error) {
    console.error("Error removing like:", error);
    throw error;
  }
}

export async function editProfile(values, token) {
  try {
    const res = await fetch(`${baseUrl}/users/me/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(values),
    });
    return processServerResponse(res);
  } catch (error) {
    console.log("Error updating Profile:", error);
    throw error;
  }
}

export async function setUserInfo(values, token) {
  try {
    const res = await fetch(`${baseUrl}/users/me/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(values),
    });
    return processServerResponse(res);
  } catch (error) {
    console.log("Error from setUserInfo: ", error);
    throw error;
  }
}

// start db.json with this > json-server --watch db.json --id _id --port 3001
