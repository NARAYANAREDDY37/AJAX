//Text File data
//Text button
let textButton = document.querySelector('#text-btn');
textButton.addEventListener('click', function () {
	//creating an AJAX request
	let xhr = new XMLHttpRequest();

	//prepare the request
	xhr.open('GET', './data/messsage.txt', true);

	//send the request
	xhr.send();

	//process the request
	xhr.onload = () => {
		if (xhr.status === 200) {
			let data = xhr.responseText;
			displayTextData(data);
		}
	};
});

//display TextData
let displayTextData = (data) => {
	let htmlTemplate = `<h3>${data}</h3>`;
	document.querySelector('#text-card').innerHTML = htmlTemplate;
};

/* Json file Data */
//JSON button
let jsonButton = document.querySelector('#json-btn');
jsonButton.addEventListener('click', function () {
	//creating an AJAX request
	let xhr = new XMLHttpRequest();

	//prepare the request
	xhr.open('GET', './data/mobiles.json', true);

	//send the request
	xhr.send();

	//process the request
	xhr.onload = () => {
		if (xhr.status === 200) {
			let data = xhr.responseText;
			let mobile = JSON.parse(data);
			displayJsonData(mobile);
		}
	};
});

//display Json Data
let displayJsonData = (mobile) => {
	htmlTemplate = `<ul class="list-group mt-2">
                    <li class="list-group-item">
                    Id: ${mobile.id}</li>                
                    <li class="list-group-item">
                    Brand: ${mobile.brand}</li>                
                    <li class="list-group-item">
                    Color: ${mobile.color}</li>                
                    <li class="list-group-item">
                    Price: ${mobile.price}</li>                
                  </ul>`;
	document.querySelector('#json-card').innerHTML = htmlTemplate;
};

/* API Data */
//API button
let apiButton = document.querySelector('#api-btn');
apiButton.addEventListener('click', function () {
	//creating an AJAX request
	let xhr = new XMLHttpRequest();

	//prepare the request
	xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

	//send the request
	xhr.send();

	//process the request
	xhr.onload = () => {
		if (xhr.status === 200) {
			let data = xhr.responseText;
			let users = JSON.parse(data);
			displayUsersData(users);
		}
	};
});

//display APIData
let displayUsersData = (users) => {
	let htmlTemplate = '';

	for (let user of users) {
		htmlTemplate += `<ul class="list-group mt-2">
                    <li class="list-group-item">
                    Id: ${user.id}</li>                
                    <li class="list-group-item">
                    Name: ${user.name}</li>                
                    <li class="list-group-item">
                    Email: ${user.email}</li>                
                    <li class="list-group-item">
                    Street: ${user.address.street}</li>
                    <li class="list-group-item">
                    City: ${user.address.city}</li>                
                  </ul>`;
	}
	document.querySelector('#api-card').innerHTML = htmlTemplate;
};
