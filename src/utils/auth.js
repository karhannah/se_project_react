const baseUrl = process.env.NODE_ENV === "production" 
  ? "https://api.karhannah.jumpingcrab.com"
  : "http://localhost:3001";

import { request } from './api';

async function signup({ name, avatar, email, password }) {
	return request(`${ baseUrl }/signup`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({ name, avatar, email, password })
	});
}

async function signin({ email, password }) {
	return request(`${ baseUrl }/signin`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({ email, password })
	});
}

async function validateToken(token) {
	return request(`${ baseUrl }/users/me`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"authorization": `Bearer ${ token }`
		}
	});
}

async function modifyProfile({ name, avatar }, token) {
	return request(`${ baseUrl }/users/me`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
			"authorization": `Bearer ${ token }`
		},
		body: JSON.stringify({ name, avatar })
	});
}

export { signup, signin, validateToken, modifyProfile };
