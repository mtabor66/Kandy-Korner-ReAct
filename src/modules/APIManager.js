const remoteURL = 'http://localhost:5002';
const api = {
	all: (branch) => {
		return fetch(`${remoteURL}/${branch}`).then((e) => e.json());
	},
	single: (branch, id) => {
		return fetch(`${remoteURL}/${branch}/${id}`).then((e) => e.json());
	},
	deleteAndList: (branch, id) => {
		return fetch(`${remoteURL}/${branch}/${id}`, {
			method: 'DELETE'
		})
			.then((e) => e.json())
			.then(() => {
				return fetch(`${remoteURL}/${branch}`).then((e) => e.json());
			});
	},
	post(newAnimal, branch) {
		return fetch(`${remoteURL}/${branch}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newAnimal)
		}).then((data) => data.json());
	}
};

export default api;