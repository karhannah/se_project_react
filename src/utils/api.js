const baseUrl = 'http://localhost:3001';

async function getItems() {
	return fetch(`${ baseUrl }/items`).then((res) => {
		return res.ok ? res.json() : Promise.reject(`Error: ${ res.status }`);
	});
}

const ApiPost = ({ name, imageUrl, weather }) => {
	
}

export { getItems };
