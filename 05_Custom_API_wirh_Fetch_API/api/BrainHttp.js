export class BrainHttp {
	constructor() {}

	// GET Request (method)
	get(url) {
		return new Promise((resolve, reject) => {
			fetch(url).then((response) => {
				response
					.json()
					.then((data) => {
						resolve(data);
					})
					.catch((err) => reject(err));
			});
		});
	}

	//POST request
	post(url, data) {
		return new Promise((resolve, reject) => {
			fetch(url, {
				method: 'POST',
				headers: {
					'content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			}).then((response) => {
				response
					.json()
					.then((data) => {
						resolve(data);
					})
					.catch((err) => reject(err));
			});
		});
	}

	// PUT request
	put(url, data) {
		return new Promise((resolve, reject) => {
			fetch(url, {
				method: 'PUT',
				headers: {
					'content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			}).then((response) => {
				response
					.json()
					.then((data) => {
						resolve(data);
					})
					.catch((err) => reject(err));
			});
		});
	}

	//DELETE request
	delete(url) {
		return new Promise((resolve, reject) => {
			fetch(url, {
				method: 'DELETE',
				headers: {
					'content-Type': 'application/json',
				},
			}).then((response) => {
				response
					.json()
					.then((data) => {
						resolve(data);
					})
					.catch((err) => reject(err));
			});
		});
	}
}
