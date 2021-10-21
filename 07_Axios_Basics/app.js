//Text File data
//Text button
let textButton = document.querySelector('#text-btn');
textButton.addEventListener('click', function () {
	fetchTextData();
});

let fetchTextData = () => {
	fetch('./data/messsage.txt').then((response) => {
		if (response.status !== 200) {
			console.log(`Something went wrong: ${response.status}`);
			return;
		}

		response.text().then((data) => {
			let htmlTemplate = `<h3>${data}</h3>`;
			document.getElementById('text-card').innerHTML = htmlTemplate;
		});
	});
};

/* Json file Data */
//JSON button
let jsonButton = document.querySelector('#json-btn');
jsonButton.addEventListener('click', function () {
	fetch('./data/mobiles.json').then((response) => {
		if (response.status !== 200) {
			console.log(`Something went wrong: ${response.status}`);
			return;
		}

		response.json().then((data) => {
			displayJsonData(data);
		});
	});
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
	fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
		if (response.status !== 200) {
			console.log(`Something went wrong: ${response.status}`);
			return;
		}

		response.json().then((data) => {
			displayUsersData(data);
		});
	});
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
