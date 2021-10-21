import { BrainHttp } from './api/BrainHttp.js';
const serverURL = `http://127.0.0.1:3000/api`;

// GET Button
let getButton = document.querySelector('#get-btn');
getButton.addEventListener('click', function () {
	fetchEmployees();
});

let fetchEmployees = () => {
	// Actually we need to Ajax calls here but it will be clumpsy here so I've created an another file (BrainHTTP.js) for AJAX calls &imported here

	//creating new object from BrainHttp. so that we can access properties of it
	let fetch = new BrainHttp();
	let url = `${serverURL}/employees`;
	fetch
		.get(url)
		.then((data) => {
			let employees = data;
			let tableRows = '';
			for (let employee of employees) {
				tableRows += `<tr>
                          <td>${employee.id}</td>
                          <td>${employee.first_name}</td>
                          <td>${employee.last_name}</td>
                          <td>${employee.email}</td>
                          <td>${employee.gender}</td>
                          <td>${employee.ip_address}</td>
                      </tr>`;
			}
			document.querySelector('#table-body').innerHTML = tableRows;
		})
		.catch((err) => {
			console.log(err);
		});
};

//POST Button
let postButton = document.querySelector('#post-btn');
postButton.addEventListener('click', () => {
	let url = `${serverURL}/employees`;
	let newEmployee = {
		first_name: 'Cameron',
		last_name: 'Dine',
		email: 'Malik@gmail.com',
		gender: 'Male',
		ip_address: '127.10.20.000',
	};

	let fetch = new BrainHttp();
	fetch
		.post(url, newEmployee)
		.then((data) => {
			console.log(data);
			fetchEmployees();
		})
		.catch((error) => {
			console.log(error);
		});
	fetchEmployees();
});

//PUT button
let putButton = document.querySelector('#put-btn');
putButton.addEventListener('click', () => {
	let empId = `_abcdef`;
	let updatedEmployee = {
		id: empId,
		first_name: 'Venkata reddy',
		last_name: 'chinnapareddy',
		email: 'chinnapareddy@ch.com',
		gender: 'Male',
		ip_address: '127.97.52.92',
	};

	let url = `${serverURL}/employees/${empId}`;
	let fetch = new BrainHttp();
	fetch
		.put(url, updatedEmployee)
		.then((data) => {
			console.log(data);
		})
		.catch((err) => {
			console.log(err);
		});
	fetchEmployees();
});

//DELETE Button
let deleteButton = document.querySelector('#delete-btn');
deleteButton.addEventListener('click', () => {
	let employeeId = `_g3wltxf09`;

	let url = `${serverURL}/employees/${employeeId}`;
	let fetch = new BrainHttp();
	fetch.delete(url).then((data) => {
		console.log(data);
	});
	fetchEmployees();
});
