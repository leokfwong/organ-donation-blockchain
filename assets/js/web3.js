if (typeof web3 !== 'undefined') {
	web3 = new Web3(web3.currentProvider);
} else {
	web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
}

const contractAbi = [{
	"inputs": [{
		"internalType": "string",
		"name": "_firstname",
		"type": "string"
	}, {
		"internalType": "string",
		"name": "_lastname",
		"type": "string"
	}, {
		"internalType": "string",
		"name": "_medid",
		"type": "string"
	}, {
		"internalType": "string",
		"name": "_bloodtype",
		"type": "string"
	}, {
		"internalType": "string",
		"name": "_height",
		"type": "string"
	}, {
		"internalType": "string",
		"name": "_weight",
		"type": "string"
	}],
	"name": "addDonor",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "string",
		"name": "_firstname",
		"type": "string"
	}, {
		"internalType": "string",
		"name": "_lastname",
		"type": "string"
	}, {
		"internalType": "string",
		"name": "_medid",
		"type": "string"
	}, {
		"internalType": "string",
		"name": "_bloodtype",
		"type": "string"
	}, {
		"internalType": "string",
		"name": "_height",
		"type": "string"
	}, {
		"internalType": "string",
		"name": "_weight",
		"type": "string"
	}],
	"name": "addPatient",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [],
	"name": "donorCount",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"name": "donors",
	"outputs": [{
		"internalType": "uint256",
		"name": "id",
		"type": "uint256"
	}, {
		"internalType": "string",
		"name": "firstname",
		"type": "string"
	}, {
		"internalType": "string",
		"name": "lastname",
		"type": "string"
	}, {
		"internalType": "string",
		"name": "medid",
		"type": "string"
	}, {
		"internalType": "string",
		"name": "bloodtype",
		"type": "string"
	}, {
		"internalType": "string",
		"name": "height",
		"type": "string"
	}, {
		"internalType": "string",
		"name": "weight",
		"type": "string"
	}, {
		"internalType": "string",
		"name": "status",
		"type": "string"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "_index",
		"type": "uint256"
	}],
	"name": "getAllDonors",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}, {
		"internalType": "string",
		"name": "",
		"type": "string"
	}, {
		"internalType": "string",
		"name": "",
		"type": "string"
	}, {
		"internalType": "string",
		"name": "",
		"type": "string"
	}, {
		"internalType": "string",
		"name": "",
		"type": "string"
	}, {
		"internalType": "string",
		"name": "",
		"type": "string"
	}, {
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "_index",
		"type": "uint256"
	}],
	"name": "getAllPatients",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}, {
		"internalType": "string",
		"name": "",
		"type": "string"
	}, {
		"internalType": "string",
		"name": "",
		"type": "string"
	}, {
		"internalType": "string",
		"name": "",
		"type": "string"
	}, {
		"internalType": "string",
		"name": "",
		"type": "string"
	}, {
		"internalType": "string",
		"name": "",
		"type": "string"
	}, {
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "patientCount",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"name": "patients",
	"outputs": [{
		"internalType": "uint256",
		"name": "id",
		"type": "uint256"
	}, {
		"internalType": "string",
		"name": "firstname",
		"type": "string"
	}, {
		"internalType": "string",
		"name": "lastname",
		"type": "string"
	}, {
		"internalType": "string",
		"name": "medid",
		"type": "string"
	}, {
		"internalType": "string",
		"name": "bloodtype",
		"type": "string"
	}, {
		"internalType": "string",
		"name": "height",
		"type": "string"
	}, {
		"internalType": "string",
		"name": "weight",
		"type": "string"
	}, {
		"internalType": "string",
		"name": "status",
		"type": "string"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "string",
		"name": "_medid",
		"type": "string"
	}],
	"name": "validateMedicalData",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"stateMutability": "pure",
	"type": "function"
}];

const contractAddress = '0xE66bC32e666ae35850F0037F0795eC708e720905';
const contract = new web3.eth.Contract(contractAbi, contractAddress);

function clearForm() {
	for (let i = 0; i < input_names.length; i++) {
		document.getElementById(input_names[i]).value = "";
	}
}

function addPatient(firstname, lastname, bloodtype, medid, height, weight) {

	console.log("Calling addPatient function... (" + firstname + ", " + lastname + ", " + bloodtype + ", " + medid + "," + height + ", " + weight + ")");

	let form_response = document.getElementById("form-response");
	let form_response_message = document.getElementById("form-response-message");

	web3.eth.getAccounts().then(function(accounts) {
		contract.methods.addPatient(firstname, lastname, bloodtype, medid, height, weight).send({
			from: accounts[0],
			gas: 3000000
		}, function(response) {
			if (response == null) {
				console.log("Success!");
				form_response_message.innerHTML = "Success!";
				form_response.style.background = "#22B573";
				clearForm();
			}
		}).catch((err) => {
			console.log("Failed with error: " + err);
			form_response_message.innerHTML = err;
			form_response.style.background = "#D84A49";
		});
		form_response.style.display = "flex";
	});
}

function addDonor(firstname, lastname, bloodtype, medid, height, weight) {

	console.log("Calling addDonor function... (" + firstname + ", " + lastname + ", " + bloodtype + ", " + medid + "," + height + ", " + weight + ")");

	let form_response = document.getElementById("form-response");
	let form_response_message = document.getElementById("form-response-message");

	web3.eth.getAccounts().then(function(accounts) {
		contract.methods.addDonor(firstname, lastname, bloodtype, medid, height, weight).send({
			from: accounts[0],
			gas: 3000000
		}, function(response) {
			if (response == null) {
				console.log("Success!");
				form_response_message.innerHTML = "Success!";
				form_response.style.background = "#22B573";
				clearForm();
			}
		}).catch((err) => {
			console.log("Failed with error: " + err);
			form_response_message.innerHTML = err;
			form_response.style.background = "#D84A49";
		});
		form_response.style.display = "flex";
	});
}

function viewPatients(div_id) {

	contract.methods.patientCount().call().then(function(count) {
		count++;
		console.log(count);
		web3.eth.getAccounts().then(function(accounts) {

			let list_container = document.getElementById(div_id);
			list_container.innerHTML = "";

			let header = document.createElement("div");
			header.id = "list-header";
			header.className = "list-row";
			list_container.appendChild(header);

			let header_items = ["First Name", "Last Name", "Bloodtype", "Med. Ins. #", "Height", "Weight", "Status"];

			for (let i = 0; i < header_items.length; i++) {
				let item = document.createElement("div");
				item.id = "list-item-" + (i + 1);
				item.className = "list-item list-item-" + (i + 1);
				header.appendChild(item);
				item.innerHTML = header_items[i];
			}

			for (let i = 1; i < count; i++) {
				contract.methods.getAllPatients(i).call().then(function(result) {
					console.log(result, i);

					let row = document.createElement("div");
					row.id = "list-row-" + (i);
					row.className = "list-row";
					list_container.appendChild(row);

					for (let j = 0; j < header_items.length; j++) {
						let item = document.createElement("div");
						item.id = "list-item-" + (i) + "-" + (j + 1);
						item.className = "list-item list-item-" + (j + 1);
						row.appendChild(item);
						item.innerHTML = result[j];
					}

				});
			}
		});
	});
}


function viewDonors(div_id) {

	contract.methods.donorCount().call().then(function(count) {
		count++;
		console.log(count);
		web3.eth.getAccounts().then(function(accounts) {

			let list_container = document.getElementById(div_id);
			list_container.innerHTML = "";

			let header = document.createElement("div");
			header.id = "list-header";
			header.className = "list-row";
			list_container.appendChild(header);

			let header_items = ["First Name", "Last Name", "Bloodtype", "Med. Ins. #", "Height", "Weight", "Status"];

			for (let i = 0; i < header_items.length; i++) {
				let item = document.createElement("div");
				item.id = "list-item-" + (i + 1);
				item.className = "list-item list-item-" + (i + 1);
				header.appendChild(item);
				item.innerHTML = header_items[i];
			}

			for (let i = 1; i < count; i++) {
				contract.methods.getAllDonors(i).call().then(function(result) {
					console.log(result, i);

					let row = document.createElement("div");
					row.id = "list-row-" + (i);
					row.className = "list-row";
					list_container.appendChild(row);

					for (let j = 0; j < header_items.length; j++) {
						let item = document.createElement("div");
						item.id = "list-item-" + (i) + "-" + (j + 1);
						item.className = "list-item list-item-" + (j + 1);
						row.appendChild(item);
						item.innerHTML = result[j];
					}

				});
			}
		});
	});

}