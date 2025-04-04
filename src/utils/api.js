const baseUrl = 'http://localhost:3001';

export function checkResponse(res) {
	return res.ok ? res.json() : Promise.reject(`Error: ${ res.status }`);
}

async function request(url, options) {
	return fetch(url, options).then(checkResponse);
}

async function getItems() {
	return request(`${ baseUrl }/items`);
}

async function addItem({ name, imageUrl, weather }, token) {
	return request(`${ baseUrl }/items`, {
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
	} );
}

async function deleteItem(id, token) {
	return request(`${ baseUrl }/items/${ id }`, {
		method: "DELETE",
		headers: {
			"authorization": `Bearer ${ token }`
		}
	});
}

async function addCardLike(id, token) {
	return request(`${ baseUrl }/items/${ id }/likes`, {
		method: "PUT",
		headers: {
			"authorization": `Bearer ${ token }`
		}
	});
}

async function removeCardLike(id, token) {
	return request(`${ baseUrl }/items/${ id }/likes`, {
		method: "DELETE",
		headers: {
			"authorization": `Bearer ${ token }`
		}
	});
}

export { request, getItems, addItem, deleteItem, addCardLike, removeCardLike };
