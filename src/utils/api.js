const baseUrl = 'http://localhost:3001';

async function getItems() {
	return fetch(`${ baseUrl }/items`).then((res) => {
		return res.ok ? res.json() : Promise.reject(`Error: ${ res.status }`);
	});
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
	} ).then((res) => {
		return res.ok ? res.json() : Promise.reject(`Error: ${ res.status }`);
	});
}

async function deleteItem(id) {
	return fetch(`${ baseUrl }/items/${ id }`, {
		method: "DELETE",
	}).then((res) => {
		return res.ok ? res.json() : Promise.reject(`Error: ${ res.status }`);
	})
}

export { getItems, addItem, deleteItem };
