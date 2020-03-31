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
	"inputs": [{
		"internalType": "uint256",
		"name": "_index",
		"type": "uint256"
	}, {
		"internalType": "string",
		"name": "_newstatus",
		"type": "string"
	}],
	"name": "updatePatient",
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
	"name": "getDonor",
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
	"name": "getPatient",
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

const contractAddress = '0x5F6A605380Fdf30cf5ef0eaB4E88df09EC8d444f';
const contract = new web3.eth.Contract(contractAbi, contractAddress);

function clearForm() {
	for (let i = 0; i < input_names.length; i++) {
		document.getElementById(input_names[i]).value = "";
	}
}

function checkBlockchainStatus() {

	console.log("Checking blockchain status...");

	let status = document.getElementById("status");
	let status_icon = document.getElementById("status-icon");
	let status_text = document.getElementById("status-text");

	web3.eth.net.isListening().then((s) => {
		console.log("Connected to node...");
		status.style.color = "#22B573";
		status_icon.style.background = "#22B573";
		status_text.innerHTML = "Online";

		let user_profile = document.getElementById("user-profile");
		let user_obj = JSON.parse(sessionStorage.getItem("user"));

		let user_title = document.createElement("div");
		user_title.id = "user-profile-title";
		user_profile.appendChild(user_title);
		user_title.innerHTML = "Logged in as:";

		let user_icon = document.createElement("div");
		user_icon.id = "user-profile-icon";
		user_profile.appendChild(user_icon);
		user_icon.innerHTML = "<i class='" + user_obj.icon + "'></i>";

		let user_input = document.createElement("select");
		user_input.id = "user-profile-input";
		user_profile.appendChild(user_input);
		user_input.addEventListener("change", function() {
			switchUser();
		});

		let options = ["donor", "patient", "doctor"];

		for (let i = 0; i < options.length; i++) {
			let user_option = document.createElement("option");
			user_option.value = options[i];
			user_option.text = capitalize(options[i]);
			user_input.appendChild(user_option);
		}

	}).catch((err) => {
		console.log("Not connected to blockchain: ", err);
		status.style.color = "#D84A49";
		status_icon.style.background = "#D84A49";
		status_text.innerHTML = "Offline";
	});
}

function setDefaultUser() {
	let user_obj = {};
	user_obj.type = "donor";
	user_obj.address = "0xb330AA7f67D10e6BBdFF3633FAfe34a286116B04";
	user_obj.icon = "fas fa-hand-holding-heart";

	sessionStorage.setItem("user", JSON.stringify(user_obj));
}

function switchUser() {
	let user_input = document.getElementById("user-profile-input");
	let obj = {};
	obj.type = user_input.value;
	if (user_input.value == "donor") {
		obj.address = "0xb330AA7f67D10e6BBdFF3633FAfe34a286116B04";
		obj.icon = "fas fa-hand-holding-heart";
	} else if (user_input.value == "patient") {
		obj.address = "0x0a02D0A98FD47A5B1eF2789fd342c2Fb9c69447f";
		obj.icon = "fas fa-user-injured";
	} else if (user_input.value == "doctor") {
		obj.address = "0xcE4b0b541efee563E818f549F27C3087c6888516";
		obj.icon = "fas fa-stethoscope";
	} else {
		console.log("User type doesn't exist...");
	}
	let user_icon = document.getElementById("user-profile-icon");
	user_icon.innerHTML = "<i class='" + obj.icon + "'></i>";

	sessionStorage.setItem("user", JSON.stringify(obj));
}

function addPatient(firstname, lastname, bloodtype, medid, height, weight) {

	console.log("Calling addPatient function... (" + firstname + ", " + lastname + ", " + bloodtype + ", " + medid + "," + height + ", " + weight + ")");

	let form_response = document.getElementById("form-response");
	let form_response_loading = document.getElementById("form-response-loading");
	let form_response_message = document.getElementById("form-response-message");

	form_response.style.display = "none";
	form_response_loading.style.display = "flex";

	web3.eth.net.isListening().then((s) => {
		console.log("Connected to node...");

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
			form_response_loading.style.display = "none";
		});

	}).catch((err) => {
		console.log("Not connected to blockchain: ", err);
		form_response_message.innerHTML = err;
		form_response.style.background = "#D84A49";
		form_response.style.display = "flex";
		form_response_loading.style.display = "none";
	});
}

function addDonor(firstname, lastname, bloodtype, medid, height, weight) {

	console.log("Calling addDonor function... (" + firstname + ", " + lastname + ", " + bloodtype + ", " + medid + "," + height + ", " + weight + ")");

	let form_response = document.getElementById("form-response");
	let form_response_loading = document.getElementById("form-response-loading");
	let form_response_message = document.getElementById("form-response-message");

	form_response.style.display = "none";
	form_response_loading.style.display = "flex";


	web3.eth.net.isListening().then((s) => {
		console.log("Connected to node...");

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
			form_response_loading.style.display = "none";
		});

	}).catch((err) => {
		console.log("Not connected to blockchain: ", err);
		form_response_message.innerHTML = err;
		form_response.style.background = "#D84A49";
		form_response.style.display = "flex";
		form_response_loading.style.display = "none";
	});
}

function viewPatients(div_id) {

	let list_loading = document.getElementById("list-loading");

	web3.eth.net.isListening().then((s) => {
		console.log("Connected to node...");

		contract.methods.patientCount().call().then(function(count) {
			list_loading.style.display = "none";
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
				if (count == 1) {
					let row = document.createElement("div");
					row.id = "list-row-empty";
					row.className = "list-row";
					list_container.appendChild(row);
					row.innerHTML = "The list is currently empty.";
				} else {
					for (let i = 1; i < count; i++) {
						contract.methods.getPatient(i).call().then(function(result) {
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
				}
			});
		}).catch((err) => {
			console.log("Failed with error: " + err);
		});

	}).catch((e) => {
		console.log("Not connected to blockchain: ", e);
		let list_container = document.getElementById("list-container");
		list_container.innerHTML = "";

		list_loading.style.display = "none";

		let list_error = document.createElement("list-error");
		list_error.id = "list-error";
		list_error.className = "error-box";
		list_container.appendChild(list_error);
		list_error.innerHTML = e;
	});
}


function viewDonors(div_id) {

	let list_loading = document.getElementById("list-loading");

	web3.eth.net.isListening().then((s) => {
		console.log("Connected to node...");

		contract.methods.donorCount().call().then(function(count) {
			list_loading.style.display = "none";
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
				if (count == 1) {
					let row = document.createElement("div");
					row.id = "list-row-empty";
					row.className = "list-row";
					list_container.appendChild(row);
					row.innerHTML = "The list is currently empty.";
				} else {
					for (let i = 1; i < count; i++) {
						contract.methods.getDonor(i).call().then(function(result) {
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
				}
			});
		}).catch((err) => {
			console.log("Failed with error: " + err);
		});

	}).catch((e) => {
		console.log("Not connected to blockchain: ", e);
		let list_container = document.getElementById("list-container");
		list_container.innerHTML = "";

		list_loading.style.display = "none";

		let list_error = document.createElement("list-error");
		list_error.id = "list-error";
		list_error.className = "error-box";
		list_container.appendChild(list_error);
		list_error.innerHTML = e;
	});
}

function fetchDonorsPatients() {

	let patients = [];
	let donors = [];
	let attributes = ["firstname", "lastname", "bloodtype", "medid", "height", "weight", "status"];

	let promise_donor = new Promise((resolve, reject) => {
		contract.methods.donorCount().call().then(function(count) {
			count++;
			web3.eth.getAccounts().then(function(accounts) {

				if (count == 1) {
					resolve();
				} else {
					for (let i = 1; i < count; i++) {
						contract.methods.getDonor(i).call().then(function(result) {
							let donor = {};
							for (let j = 0; j < attributes.length; j++) {
								donor[attributes[j]] = result[j];
							}
							donors.push(donor);
							if ((i + 1) == count) resolve();
						});
					}
				}
			});
		}).catch((e) => {
			console.log("Not connected to blockchain: ", e);
			let matching_content = document.getElementById("matching-content");
			matching_content.innerHTML = "";

			let matching_error = document.createElement("matching-error");
			matching_error.id = "matching-error";
			matching_error.className = "error-box";
			matching_content.appendChild(matching_error);
			matching_error.innerHTML = e;

		});;;
	});

	let promise_patient = new Promise((resolve, reject) => {
		contract.methods.patientCount().call().then(function(count) {
			count++;
			web3.eth.getAccounts().then(function(accounts) {

				if (count == 1) {
					resolve();
				} else {
					for (let i = 1; i < count; i++) {
						contract.methods.getPatient(i).call().then(function(result) {
							let patient = {};
							for (let j = 0; j < attributes.length; j++) {
								patient[attributes[j]] = result[j];
							}
							patients.push(patient);
							if ((i + 1) == count) resolve();
						});
					}
				}
			});
		}).catch((e) => {
			console.log("Not connected to blockchain: ", e);
			let matching_content = document.getElementById("matching-content");
			matching_content.innerHTML = "";

			let matching_error = document.createElement("matching-error");
			matching_error.id = "matching-error";
			matching_error.className = "error-box";
			matching_content.appendChild(matching_error);
			matching_error.innerHTML = e;

		});;
	});

	Promise.all([promise_patient]).then(() => {
		console.log("Fetched donors and patients!");

		let content = document.getElementById("matching-content");
		content.innerHTML = "";

		if (patients.length == 0) {
			let row = document.createElement("div");
			row.id = "matching-row-empty";
			content.appendChild(row);
			row.innerHTML = "There are currently no patients in the blockchain."
		} else {
			// Iterate through patients and try to find matching
			for (let i = 0; i < patients.length; i++) {
				// Initialize variables
				let patient = patients[i];
				let match_found = 0;
				// Create row
				let row = document.createElement("div");
				row.id = "matching-row-" + (i + 1);
				row.className = "matching-row";
				content.appendChild(row);

				let patient_container = document.createElement("div");
				patient_container.id = "patient-container-" + (i + 1);
				patient_container.className = "patient-container subject-container";
				row.appendChild(patient_container);

				let donor_container = document.createElement("div");
				donor_container.id = "donor-container-" + (i + 1);
				donor_container.className = "donor-container subject-container";
				row.appendChild(donor_container);

				let patient_entry = document.createElement("div");
				patient_entry.id = "patient-entry-" + (i + 1);
				patient_entry.className = "patient-entry subject-entry";
				patient_container.appendChild(patient_entry);

				let row_1 = document.createElement("div");
				row_1.id = "patient-entry-" + (i + 1) + "-row-1";
				row_1.className = "subject-entry-row";
				patient_entry.appendChild(row_1);

				let firstname = document.createElement("div");
				firstname.id = "patient-entry-" + (i + 1) + "-row-1-firstname";
				firstname.className = "subject-entry-row-info";
				row_1.appendChild(firstname);

				let firstname_title = document.createElement("div");
				firstname_title.id = "patient-entry-" + (i + 1) + "-row-1-firstname-title";
				firstname_title.className = "subject-entry-row-info-title";
				firstname.appendChild(firstname_title);
				firstname_title.innerHTML = "First Name";

				let firstname_value = document.createElement("div");
				firstname_value.id = "patient-entry-" + (i + 1) + "-row-1-firstname-value";
				firstname_value.className = "subject-entry-row-info-value";
				firstname.appendChild(firstname_value);
				firstname_value.innerHTML = patient.firstname;

				let lastname = document.createElement("div");
				lastname.id = "patient-entry-" + (i + 1) + "-row-1-lastname";
				lastname.className = "subject-entry-row-info";
				row_1.appendChild(lastname);

				let lastname_title = document.createElement("div");
				lastname_title.id = "patient-entry-" + (i + 1) + "-row-1-lastname-title";
				lastname_title.className = "subject-entry-row-info-title";
				lastname.appendChild(lastname_title);
				lastname_title.innerHTML = "Last Name";

				let lastname_value = document.createElement("div");
				lastname_value.id = "patient-entry-" + (i + 1) + "-row-1-lastname-value";
				lastname_value.className = "subject-entry-row-info-value";
				lastname.appendChild(lastname_value);
				lastname_value.innerHTML = patient.lastname;

				let bloodtype = document.createElement("div");
				bloodtype.id = "patient-entry-" + (i + 1) + "-row-1-bloodtype";
				bloodtype.className = "subject-entry-row-info";
				row_1.appendChild(bloodtype);

				let bloodtype_title = document.createElement("div");
				bloodtype_title.id = "patient-entry-" + (i + 1) + "-row-1-bloodtype-title";
				bloodtype_title.className = "subject-entry-row-info-title";
				bloodtype.appendChild(bloodtype_title);
				bloodtype_title.innerHTML = "Blood Type";

				let bloodtype_value = document.createElement("div");
				bloodtype_value.id = "patient-entry-" + (i + 1) + "-row-1-bloodtype-value";
				bloodtype_value.className = "subject-entry-row-info-value";
				bloodtype.appendChild(bloodtype_value);
				bloodtype_value.innerHTML = patient.bloodtype;

				let row_2 = document.createElement("div");
				row_2.id = "patient-entry-" + (i + 1) + "-row-2";
				row_2.className = "subject-entry-row";
				patient_entry.appendChild(row_2);

				let medid = document.createElement("div");
				medid.id = "patient-entry-" + (i + 1) + "-row-1-medid";
				medid.className = "subject-entry-row-info";
				row_2.appendChild(medid);

				let medid_title = document.createElement("div");
				medid_title.id = "patient-entry-" + (i + 1) + "-row-1-medid-title";
				medid_title.className = "subject-entry-row-info-title";
				medid.appendChild(medid_title);
				medid_title.innerHTML = "Medical Insurance #";

				let medid_value = document.createElement("div");
				medid_value.id = "patient-entry-" + (i + 1) + "-row-1-medid-value";
				medid_value.className = "subject-entry-row-info-value";
				medid.appendChild(medid_value);
				medid_value.innerHTML = patient.medid;

				let row_3 = document.createElement("div");
				row_3.id = "patient-entry-" + (i + 1) + "-row-3";
				row_3.className = "subject-entry-row";
				patient_entry.appendChild(row_3);

				let height = document.createElement("div");
				height.id = "patient-entry-" + (i + 1) + "-row-1-height";
				height.className = "subject-entry-row-info";
				row_3.appendChild(height);

				let height_title = document.createElement("div");
				height_title.id = "patient-entry-" + (i + 1) + "-row-1-height-title";
				height_title.className = "subject-entry-row-info-title";
				height.appendChild(height_title);
				height_title.innerHTML = "Height (cm)";

				let height_value = document.createElement("div");
				height_value.id = "patient-entry-" + (i + 1) + "-row-1-height-value";
				height_value.className = "subject-entry-row-info-value";
				height.appendChild(height_value);
				height_value.innerHTML = patient.height;

				let weight = document.createElement("div");
				weight.id = "patient-entry-" + (i + 1) + "-row-1-weight";
				weight.className = "subject-entry-row-info";
				row_3.appendChild(weight);

				let weight_title = document.createElement("div");
				weight_title.id = "patient-entry-" + (i + 1) + "-row-1-weight-title";
				weight_title.className = "subject-entry-row-info-title";
				weight.appendChild(weight_title);
				weight_title.innerHTML = "Weight (kg)";

				let weight_value = document.createElement("div");
				weight_value.id = "patient-entry-" + (i + 1) + "-row-1-weight-value";
				weight_value.className = "subject-entry-row-info-value";
				weight.appendChild(weight_value);
				weight_value.innerHTML = patient.weight;

				console.log("Find match for patient: " + patient.firstname + " " + patient.lastname);
				for (let j = 0; j < donors.length; j++) {
					let donor = donors[j];
					if (patient.bloodtype == donor.bloodtype) {

						console.log("Match found: " + donor.firstname + " " + donor.lastname);
						match_found += 1;

						let donor_entry = document.createElement("div");
						donor_entry.id = "donor-entry-" + (i + 1);
						donor_entry.className = "donor-entry subject-entry";
						donor_container.appendChild(donor_entry);

						let row_1 = document.createElement("div");
						row_1.id = "donor-entry-" + (i + 1) + "-row-1";
						row_1.className = "subject-entry-row";
						donor_entry.appendChild(row_1);

						let firstname = document.createElement("div");
						firstname.id = "donor-entry-" + (i + 1) + "-row-1-firstname";
						firstname.className = "subject-entry-row-info";
						row_1.appendChild(firstname);

						let firstname_title = document.createElement("div");
						firstname_title.id = "donor-entry-" + (i + 1) + "-row-1-firstname-title";
						firstname_title.className = "subject-entry-row-info-title";
						firstname.appendChild(firstname_title);
						firstname_title.innerHTML = "First Name";

						let firstname_value = document.createElement("div");
						firstname_value.id = "donor-entry-" + (i + 1) + "-row-1-firstname-value";
						firstname_value.className = "subject-entry-row-info-value";
						firstname.appendChild(firstname_value);
						firstname_value.innerHTML = donor.firstname;

						let lastname = document.createElement("div");
						lastname.id = "donor-entry-" + (i + 1) + "-row-1-lastname";
						lastname.className = "subject-entry-row-info";
						row_1.appendChild(lastname);

						let lastname_title = document.createElement("div");
						lastname_title.id = "donor-entry-" + (i + 1) + "-row-1-lastname-title";
						lastname_title.className = "subject-entry-row-info-title";
						lastname.appendChild(lastname_title);
						lastname_title.innerHTML = "Last Name";

						let lastname_value = document.createElement("div");
						lastname_value.id = "donor-entry-" + (i + 1) + "-row-1-lastname-value";
						lastname_value.className = "subject-entry-row-info-value";
						lastname.appendChild(lastname_value);
						lastname_value.innerHTML = donor.lastname;

						let bloodtype = document.createElement("div");
						bloodtype.id = "donor-entry-" + (i + 1) + "-row-1-bloodtype";
						bloodtype.className = "subject-entry-row-info";
						row_1.appendChild(bloodtype);

						let bloodtype_title = document.createElement("div");
						bloodtype_title.id = "donor-entry-" + (i + 1) + "-row-1-bloodtype-title";
						bloodtype_title.className = "subject-entry-row-info-title";
						bloodtype.appendChild(bloodtype_title);
						bloodtype_title.innerHTML = "Blood Type";

						let bloodtype_value = document.createElement("div");
						bloodtype_value.id = "donor-entry-" + (i + 1) + "-row-1-bloodtype-value";
						bloodtype_value.className = "subject-entry-row-info-value";
						bloodtype.appendChild(bloodtype_value);
						bloodtype_value.innerHTML = donor.bloodtype;

						let row_2 = document.createElement("div");
						row_2.id = "donor-entry-" + (i + 1) + "-row-2";
						row_2.className = "subject-entry-row";
						donor_entry.appendChild(row_2);

						let medid = document.createElement("div");
						medid.id = "donor-entry-" + (i + 1) + "-row-1-medid";
						medid.className = "subject-entry-row-info";
						row_2.appendChild(medid);

						let medid_title = document.createElement("div");
						medid_title.id = "donor-entry-" + (i + 1) + "-row-1-medid-title";
						medid_title.className = "subject-entry-row-info-title";
						medid.appendChild(medid_title);
						medid_title.innerHTML = "Medical Insurance #";

						let medid_value = document.createElement("div");
						medid_value.id = "donor-entry-" + (i + 1) + "-row-1-medid-value";
						medid_value.className = "subject-entry-row-info-value";
						medid.appendChild(medid_value);
						medid_value.innerHTML = donor.medid;

						let row_3 = document.createElement("div");
						row_3.id = "donor-entry-" + (i + 1) + "-row-3";
						row_3.className = "subject-entry-row";
						donor_entry.appendChild(row_3);

						let height = document.createElement("div");
						height.id = "donor-entry-" + (i + 1) + "-row-1-height";
						height.className = "subject-entry-row-info";
						row_3.appendChild(height);

						let height_title = document.createElement("div");
						height_title.id = "donor-entry-" + (i + 1) + "-row-1-height-title";
						height_title.className = "subject-entry-row-info-title";
						height.appendChild(height_title);
						height_title.innerHTML = "Height (cm)";

						let height_value = document.createElement("div");
						height_value.id = "donor-entry-" + (i + 1) + "-row-1-height-value";
						height_value.className = "subject-entry-row-info-value";
						height.appendChild(height_value);
						height_value.innerHTML = donor.height;

						let weight = document.createElement("div");
						weight.id = "donor-entry-" + (i + 1) + "-row-1-weight";
						weight.className = "subject-entry-row-info";
						row_3.appendChild(weight);

						let weight_title = document.createElement("div");
						weight_title.id = "donor-entry-" + (i + 1) + "-row-1-weight-title";
						weight_title.className = "subject-entry-row-info-title";
						weight.appendChild(weight_title);
						weight_title.innerHTML = "Weight (kg)";

						let weight_value = document.createElement("div");
						weight_value.id = "donor-entry-" + (i + 1) + "-row-1-weight-value";
						weight_value.className = "subject-entry-row-info-value";
						weight.appendChild(weight_value);
						weight_value.innerHTML = donor.weight;

					}
				}
				if (match_found == 0) {
					console.log("No match found.");
					let donor_entry = document.createElement("div");
					donor_entry.id = "donor-entry-" + (i + 1);
					donor_entry.className = "donor-entry";
					donor_container.appendChild(donor_entry);
					donor_entry.innerHTML = "No match found.";
					row.style.border = "solid 2px #E5535D";
					row.style.background = "#FADDDF";
				} else {
					row.style.border = "solid 2px #39B54A";
					row.style.background = "#D7F0DB";
				}
			}
		}
	});
}