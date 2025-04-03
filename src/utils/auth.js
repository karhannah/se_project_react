const baseUrl = 'http://localhost:3001';

function checkResponse(res) {
	return res.ok ? res.json() : Promise.reject(`Error: ${ res.status }`);
}

async function signup({ name, avatar, email, password }) {
	return fetch(`${ baseUrl }/signup`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({ name, avatar, email, password })
	}).then(checkResponse);
}

async function signin({ email, password }) {
	return fetch(`${ baseUrl }/signin`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({ email, password })
	}).then(checkResponse);
}

async function validateToken(token) {
	return fetch(`${ baseUrl }/users/me`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"authorization": `Bearer ${ token }`
		}
	}).then(checkResponse);
}

async function modifyProfile({ name, avatar }, token) {
	return fetch(`${ baseUrl }/users/me`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
			"authorization": `Bearer ${ token }`
		},
		body: JSON.stringify({ name, avatar })
	}).then(checkResponse);
}

export { signup, signin, validateToken, modifyProfile };
