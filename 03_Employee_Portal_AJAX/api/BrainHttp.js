export class BrainHttp {
	constructor() {
		this.http = new XMLHttpRequest();
	}

	// GET Request
	get = (url, callback) => {
		this.http.open('GET', url, true);
		this.http.send();
		this.http.onload = () => {
			if (this.http.status === 200) {
				let data = this.http.responseText;
				let employees = JSON.parse(data);
				callback(null, employees);
			} else {
				callback(`Error : ${this.http.status}`);
			}
		};
	};

	//POST request with AJAX
	post = (url, employee, callback) => {
		this.http.open('POST', url, true);
		this.http.setRequestHeader('Content-Type', 'application/json');
		this.http.send(JSON.stringify(employee));
		this.http.onload = () => {
			let data = this.http.responseText;
			let employee = JSON.parse(data);
			callback(employee);
		};
	};

	// PUT request
	put = (url, employee, callback) => {
		this.http.open('PUT', url, true);
		this.http.setRequestHeader('Content-Type', 'application/json');
		this.http.send(JSON.stringify(employee));
		this.http.onload = () => {
			let data = this.http.responseText;
			let employees = JSON.parse(data);
			callback(employees);
		};
	};

	//DELETE request
	delete = (url, callback) => {
		this.http.open('DELETE', url, true);
		this.http.setRequestHeader('Content-Type', 'application/json');
		this.http.send();
		this.http.onload = () => {
			let data = this.http.responseText;
			let employees = JSON.parse(data);
			callback(employees);
		};
	};
}
