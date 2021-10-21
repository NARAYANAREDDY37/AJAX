const serverURL = `http://127.0.0.1:3000/api`;

// GET Button
let getButton = document.querySelector('#get-btn');
getButton.addEventListener('click', function () {
	fetchEmployees();
});

let fetchEmployees = () => {
	let url = `${serverURL}/employees`;
	axios
		.get(url)
		.then((response) => {
			let employees = response.data;
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

	axios
		.post(url, newEmployee)
		.then((response) => {
			console.log(response.data);
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

	axios
		.put(url, updatedEmployee)
		.then((response) => {
			console.log(response.data);
		})
		.catch((err) => {
			console.log(err);
		});
	fetchEmployees();
});

//DELETE Button
let deleteButton = document.querySelector('#delete-btn');
deleteButton.addEventListener('click', () => {
	let employeeId = `_1ylkifcat`;

	let url = `${serverURL}/employees/${employeeId}`;

	axios.delete(url).then((response) => {
		console.log(response.data);
	});
	fetchEmployees();
});
