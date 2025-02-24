const baseUrl = 'http://localhost:3001';

export function checkResponse(res) {
	return res.ok ? res.json() : Promise.reject(`Error: ${ res.status }`);
}

async function getItems() {
	return fetch(`${ baseUrl }/items`).then(checkResponse);
}

async function addItem({ name, imageUrl, weather }) {
	return fetch(`${ baseUrl }/items`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			"name": name,
			"imageUrl": imageUrl,
			"weather": weather,
		}),
	} ).then(checkResponse);
}

async function deleteItem(id) {
	return fetch(`${ baseUrl }/items/${ id }`, {
		method: "DELETE",
	}).then(checkResponse);
}

export { getItems, addItem, deleteItem };
