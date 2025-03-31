const baseUrl = 'http://localhost:3001';
import { checkResponse } from "./api"

async function register({ email, name, avatar, password }) {
	return fetch(`${ baseUrl }/signup`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ email, name, avatar, password })
	}).then(checkResponse);
}

async function login({ email, password }) {
	return fetch(`${ baseUrl }/signin`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ email, password })
	}).then(checkResponse);
}

async function modifyProfile({ name, avatar }) {
	const token = localStorage["jwt"];
	
	return fetch(`${ baseUrl }/users/me`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
			authorization: `Bearer ${ token }`
		},
		body: JSON.stringify({ name, avatar })
	}).then(checkResponse);
}

async function checkAuthToken(token) {
	return fetch(`${ baseUrl }/users/me`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			authorization: `Bearer ${ token }`
		}
	}).then(checkResponse);
}

export { register, login, modifyProfile, checkAuthToken };
