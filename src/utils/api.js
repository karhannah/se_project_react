const baseUrl = 'http://localhost:3001';

export function checkResponse(res) {
	return res.ok ? res.json() : Promise.reject(`Error: ${ res.status }`);
}

async function getItems() {
	return fetch(`${ baseUrl }/items`).then(checkResponse);
}

async function addItem({ name, imageUrl, weather }, token) {
	return fetch(`${ baseUrl }/items`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"authorization": `Bearer ${ token }`
		},
		body: JSON.stringify({
			"name": name,
			"imageUrl": imageUrl,
			"weather": weather,
		}),
	} ).then(checkResponse);
}

async function deleteItem(id, token) {
	return fetch(`${ baseUrl }/items/${ id }`, {
		method: "DELETE",
		headers: {
			"authorization": `Bearer ${ token }`
		}
	}).then(checkResponse);
}

async function addCardLike(id, token) {
	return fetch(`${ baseUrl }/items/${ id }/likes`, {
		method: "PUT",
		headers: {
			"authorization": `Bearer ${ token }`
		}
	}).then(checkResponse);
}

async function removeCardLike(id, token) {
	return fetch(`${ baseUrl }/items/${ id }/likes`, {
		method: "DELETE",
		headers: {
			"authorization": `Bearer ${ token }`
		}
	}).then(checkResponse);
}

export { getItems, addItem, deleteItem, addCardLike, removeCardLike };
