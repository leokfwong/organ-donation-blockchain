const input_names = ["form-firstname-input", "form-lastname-input", "form-bloodtype-input", "form-medid-input", "form-height-input", "form-weight-input"];

const capitalize = (s) => {
	if (typeof s !== 'string') return ''
	return s.charAt(0).toUpperCase() + s.slice(1)
}

window.onload = function() {

	setDefaultUser();
	checkBlockchainStatus();
	loadMenuBox();

	test("0x183a3ddE689c505C4Fa05CF6a93ed039096f84eD");

	let add_donor_menu = document.getElementById('menu-item-1');
	add_donor_menu.addEventListener('click', function() {
		if (["donor", "doctor"].indexOf(JSON.parse(sessionStorage.getItem("user")).type) > -1) {
			loadAddCandidateForm("donor");
		}
	});

	let view_donors_list = document.getElementById('menu-item-2');
	view_donors_list.addEventListener("click", function() {
		if (JSON.parse(sessionStorage.getItem("user")).type == "doctor") {
			viewCandidateList("donor");
		}
	});

	let add_patient_menu = document.getElementById('menu-item-3');
	add_patient_menu.addEventListener('click', function() {
		if (["patient", "doctor"].indexOf(JSON.parse(sessionStorage.getItem("user")).type) > -1) {
			loadAddCandidateForm("patient");
		}
	});

	let view_patients_list = document.getElementById('menu-item-4');
	view_patients_list.addEventListener("click", function() {
		if (JSON.parse(sessionStorage.getItem("user")).type == "doctor") {
			viewCandidateList("patient");
		}
	});

	let find_matching = document.getElementById("menu-item-5");
	find_matching.addEventListener("click", function() {
		if (JSON.parse(sessionStorage.getItem("user")).type == "doctor") {
			findMatchings();
			fetchDonorsPatients();
		}
	});

	let back_button = document.getElementById("page-back");
	back_button.addEventListener("click", function() {
		loadMenuBox();
	});

}

function loadMenuBox() {

	function filterUI() {
		let user_type = JSON.parse(sessionStorage.getItem("user")).type;
		let locked_index;
		if (user_type == "donor") {
			locked_index = [2, 3, 4, 5];
		} else if (user_type == "patient") {
			locked_index = [1, 2, 4, 5];
		} else {
			locked_index = [];
		}
		for (let i = 1; i <= 5; i++) {
			let overlay = document.getElementById("menu-item-overlay-" + i);
			if (locked_index.indexOf(i) > -1) {
				overlay.style.display = "flex";
			} else {
				overlay.style.display = "none";
			}
		}
	}

	let menu_box = document.getElementById("menu-box");
	menu_box.style.display = "flex";

	let back_button = document.getElementById("page-back");
	back_button.style.display = "none";

	let content_box = document.getElementById("content-box");
	content_box.style.display = "none";

	let page_title = document.getElementById("page-title");
	page_title.innerHTML = "Home";

	filterUI();

}

function loadAddCandidateForm(type) {

	// Hide menu box
	let menu_box = document.getElementById("menu-box");
	menu_box.style.display = "none";
	// Display back button
	let back_button = document.getElementById("page-back");
	back_button.style.display = "block";
	// Clear and show content box
	let content_box = document.getElementById("content-box");
	content_box.innerHTML = "";
	content_box.style.display = "flex";
	// Update page title
	let page_title = document.getElementById("page-title");
	page_title.innerHTML = capitalize(type) + " Registration Form";

	// Form box container
	let form_container = document.createElement("div");
	form_container.id = "form-container";
	content_box.appendChild(form_container);

	let form_box = document.createElement("div");
	form_box.id = "form-box";
	form_container.appendChild(form_box);

	// Form message
	let form_message = document.createElement("div");
	form_message.id = "form-message";
	form_message.className = "form-row";
	form_box.appendChild(form_message);
	form_message.innerHTML = "Please enter your personal information below."

	let form_firstname_lastname = document.createElement("div");
	form_firstname_lastname.id = "form-firstname-lastname";
	form_firstname_lastname.className = "form-row-multiple";
	form_box.appendChild(form_firstname_lastname);

	// Form first name
	let form_firstname = document.createElement("div");
	form_firstname.id = "form-firstname";
	form_firstname.className = "form-row";
	form_firstname_lastname.appendChild(form_firstname);

	let form_firstname_title = document.createElement("div");
	form_firstname_title.id = "form-firstname-title";
	form_firstname_title.className = "form-title";
	form_firstname.appendChild(form_firstname_title);
	form_firstname_title.innerHTML = "First Name"

	let form_firstname_input = document.createElement("input");
	form_firstname_input.id = "form-firstname-input";
	form_firstname_input.className = "form-input";
	form_firstname.appendChild(form_firstname_input);
	form_firstname_input.addEventListener("focusout", function() {
		checkNameValidity(form_firstname_input.id);
	});

	// Form last name
	let form_lastname = document.createElement("div");
	form_lastname.id = "form-lastname";
	form_lastname.className = "form-row";
	form_firstname_lastname.appendChild(form_lastname);

	let form_lastname_title = document.createElement("div");
	form_lastname_title.id = "form-lastname-title";
	form_lastname_title.className = "form-title";
	form_lastname.appendChild(form_lastname_title);
	form_lastname_title.innerHTML = "Last Name"

	let form_lastname_input = document.createElement("input");
	form_lastname_input.id = "form-lastname-input";
	form_lastname_input.className = "form-input";
	form_lastname.appendChild(form_lastname_input);
	form_lastname_input.addEventListener("focusout", function() {
		checkNameValidity(form_lastname_input.id);
	});

	// Form blood type
	let form_bloodtype = document.createElement("div");
	form_bloodtype.id = "form-bloodtype";
	form_bloodtype.className = "form-row";
	form_box.appendChild(form_bloodtype);

	let form_bloodtype_title = document.createElement("div");
	form_bloodtype_title.id = "form-bloodtype-title";
	form_bloodtype_title.className = "form-title";
	form_bloodtype.appendChild(form_bloodtype_title);
	form_bloodtype_title.innerHTML = "Blood Type";

	let form_bloodtype_select = document.createElement("select");
	form_bloodtype_select.id = "form-bloodtype-input";
	form_bloodtype_select.className = "form-input";
	form_bloodtype.appendChild(form_bloodtype_select);

	let bloodtypes = ["AB+", "AB-", "A+", "A-", "B+", "B-", "O+", "O-"];

	for (let i = 0; i < bloodtypes.length; i++) {
		bloodtype_option = document.createElement("option");
		bloodtype_option.value = bloodtypes[i];
		bloodtype_option.text = bloodtypes[i];
		form_bloodtype_select.appendChild(bloodtype_option);
	}

	// Form medid
	let form_medid = document.createElement("div");
	form_medid.id = "form-medid";
	form_medid.className = "form-row";
	form_box.appendChild(form_medid);

	let form_medid_title = document.createElement("div");
	form_medid_title.id = "form-medid-title";
	form_medid_title.className = "form-title";
	form_medid.appendChild(form_medid_title);
	form_medid_title.innerHTML = "Medical Insurance #";

	let form_medid_input = document.createElement("input");
	form_medid_input.id = "form-medid-input";
	form_medid_input.className = "form-input";
	form_medid.appendChild(form_medid_input);
	form_medid_input.addEventListener("focusout", function() {
		checkMedicalInsurance("form-medid-input");
	});

	let form_height_weight = document.createElement("div");
	form_height_weight.id = "form-height-weight";
	form_height_weight.className = "form-row-multiple";
	form_box.appendChild(form_height_weight);

	// Form height
	let form_height = document.createElement("div");
	form_height.id = "form-height";
	form_height.className = "form-row";
	form_height_weight.appendChild(form_height);

	let form_height_title = document.createElement("div");
	form_height_title.id = "form-height-title";
	form_height_title.className = "form-title";
	form_height.appendChild(form_height_title);
	form_height_title.innerHTML = "Height (cm)"

	let form_height_input = document.createElement("input");
	form_height_input.id = "form-height-input";
	form_height_input.className = "form-input";
	form_height.appendChild(form_height_input);
	form_height_input.addEventListener("focusout", function() {
		checkHeightWeight(form_height_input.id);
	});

	// Form weight
	let form_weight = document.createElement("div");
	form_weight.id = "form-weight";
	form_weight.className = "form-row";
	form_height_weight.appendChild(form_weight);

	let form_weight_title = document.createElement("div");
	form_weight_title.id = "form-weight-title";
	form_weight_title.className = "form-title";
	form_weight.appendChild(form_weight_title);
	form_weight_title.innerHTML = "Weight (kg)"

	let form_weight_input = document.createElement("input");
	form_weight_input.id = "form-weight-input";
	form_weight_input.className = "form-input";
	form_weight.appendChild(form_weight_input);
	form_weight_input.addEventListener("focusout", function() {
		checkHeightWeight(form_weight_input.id);
	});

	// Form submit
	let form_submit_row = document.createElement("div");
	form_submit_row.id = "form-submit-row";
	form_submit_row.className = "form-row";
	form_box.appendChild(form_submit_row);

	let form_submit_button = document.createElement("div");
	form_submit_button.id = "form-submit-button";
	form_submit_row.appendChild(form_submit_button);
	form_submit_button.innerHTML = "Submit";

	// Form response box
	let form_response = document.createElement("div");
	form_response.id = "form-response";
	content_box.appendChild(form_response);

	let form_response_loading = document.createElement("div");
	form_response_loading.id = "form-response-loading";
	form_response_loading.className = "response-loading";
	content_box.appendChild(form_response_loading);

	let form_response_message = document.createElement("div");
	form_response_message.id = "form-response-message";
	form_response.appendChild(form_response_message);

	form_submit_button.addEventListener("click", function() {
		let errors = checkFormValidity(["form-firstname-input", "form-lastname-input", "form-medid-input", "form-height-input", "form-weight-input"]);
		if (errors.length == 0) {
			let firstname = document.getElementById("form-firstname-input").value;
			let lastname = document.getElementById("form-lastname-input").value;
			let bloodtype = document.getElementById("form-bloodtype-input").value;
			let medid = document.getElementById("form-medid-input").value;
			let height = document.getElementById("form-height-input").value;
			let weight = document.getElementById("form-weight-input").value;
			console.log("Adding patient " + firstname + " " + lastname + " (" + bloodtype + ", " + medid + ", " + height + ", " + weight + ")");
			if (type == "patient") {
				addPatient(firstname, lastname, bloodtype, medid, height, weight);
			} else if (type == "donor") {
				addDonor(firstname, lastname, bloodtype, medid, height, weight);
			} else {
				console.log("Candidate type doesn't exist.");
			}
		} else {
			console.log("Incomplete form!");
			let form_response = document.getElementById("form-response");
			let form_response_message = document.getElementById("form-response-message");
			form_response.style.display = "flex";
			form_response.style.background = "#D84A49";
			form_response_message.innerHTML = "";

			for (let i = 0; i < errors.length; i++) {
				let error = document.createElement("div");
				error.id = "form-response-error-" + (i + 1);
				error.className = "form-response-error";
				form_response_message.appendChild(error);
				error.innerHTML = "- " + errors[i];
			}

		}
	});
}

function checkNameValidity(divid, label) {
	let obj = {};
	obj.valid = false;
	obj.error = [];
	let input_field = document.getElementById(divid);
	if (input_field.value.length == 0) {
		input_field.style.color = "#D84A49";
		obj.error.push(label + " field is required and cannot be empty.")
	} else if (!input_field.value.match(/^[a-zA-Z-'\s]+$/)) {
		input_field.style.color = "#D84A49";
		obj.error.push(label + " field can only contain letters.")
	} else {
		input_field.style.color = "#3D485E";
		obj.valid = true;
	}
	return (obj);
}

function checkMedicalInsurance(divid, label) {
	let obj = {};
	obj.valid = false;
	obj.error = [];
	let input_field = document.getElementById(divid);
	if (input_field.value.length == 0) {
		input_field.style.color = "#D84A49";
		obj.error.push(label + " field is required and cannot be empty.")
	} else if (input_field.value.length < 10) {
		input_field.style.color = "#D84A49";
		obj.error.push(label + " must be 10 characters long.")
	} else if (!input_field.value.match(/^[a-zA-Z0-9]+$/)) {
		input_field.style.color = "#D84A49";
		obj.error.push(label + " field can only contain letters.")
	} else {
		input_field.style.color = "#3D485E";
		obj.valid = true;
	}
	return (obj);
}

function checkHeightWeight(divid, label) {
	let obj = {};
	obj.valid = false;
	obj.error = [];

	let min, max;
	if (divid == "form-height-input") {
		min = 50;
		max = 280;
	} else {
		min = 5;
		max = 650;
	}

	let input_field = document.getElementById(divid);
	if (input_field.value.length == 0) {
		input_field.style.color = "#D84A49";
		obj.error.push(label + " field is required and cannot be empty.")
	} else if (!input_field.value.match(/^[0-9\.-]+$/)) {
		input_field.style.color = "#D84A49";
		obj.error.push(label + " must be a number.")
	} else if (input_field.value < min || input_field.value > max) {
		input_field.style.color = "#D84A49";
		obj.error.push(label + " is out of range (" + min + " - " + max + ")");
	} else {
		input_field.style.color = "#3D485E";
		obj.valid = true;
	}
	return (obj);
}

function checkFormValidity(fields) {
	let errors = [];
	for (let i = 0; i < fields.length; i++) {
		if (fields[i] == "form-firstname-input") {
			let check = checkNameValidity(fields[i], "First Name");
			if (check.valid == false) {
				errors.push(check.error);
			}
		} else if (fields[i] == "form-lastname-input") {
			let check = checkNameValidity(fields[i], "Last Name");
			if (check.valid == false) {
				errors.push(check.error);
			}
		} else if (fields[i] == "form-medid-input") {
			let check = checkMedicalInsurance(fields[i], "Medical Insurance #");
			if (check.valid == false) {
				errors.push(check.error);
			}
		} else if (fields[i] == "form-height-input") {
			let check = checkHeightWeight(fields[i], "Height");
			if (check.valid == false) {
				errors.push(check.error);
			}
		} else if (fields[i] == "form-weight-input") {
			let check = checkHeightWeight(fields[i], "Weight");
			if (check.valid == false) {
				errors.push(check.error);
			}
		} else {

		}
	}
	console.log(errors);
	return (errors);
}

function viewCandidateList(type) {

	// Hide menu box
	let menu_box = document.getElementById("menu-box");
	menu_box.style.display = "none";
	// Display back button
	let back_button = document.getElementById("page-back");
	back_button.style.display = "block";
	// Clear and show content box
	let content_box = document.getElementById("content-box");
	content_box.innerHTML = "";
	content_box.style.display = "flex";
	// Update page title
	let page_title = document.getElementById("page-title");
	page_title.innerHTML = capitalize(type) + "s List";

	// List container
	let list_container = document.createElement("div");
	list_container.id = "list-container";
	content_box.appendChild(list_container);

	let list_loading = document.createElement("div");
	list_loading.id = "list-loading";
	list_loading.className = "response-loading";
	content_box.appendChild(list_loading);

	if (type == "patient") {
		viewPatients(list_container.id);
	} else if (type == "donor") {
		viewDonors(list_container.id);
	} else {
		console.log("Candidate type doesn't exist");
	}

}

function findMatchings() {

	// Hide menu box
	let menu_box = document.getElementById("menu-box");
	menu_box.style.display = "none";
	// Display back button
	let back_button = document.getElementById("page-back");
	back_button.style.display = "block";
	// Clear and show content box
	let content_box = document.getElementById("content-box");
	content_box.innerHTML = "";
	content_box.style.display = "flex";
	// Update page title
	let page_title = document.getElementById("page-title");
	page_title.innerHTML = "Donors and Patients Matching";

	let header = document.createElement("div");
	header.id = "matching-header";
	content_box.appendChild(header);

	let header_patients = document.createElement("div");
	header_patients.id = "matching-header-patients";
	header_patients.className = "matching-header-subject";
	header.appendChild(header_patients);
	header_patients.innerHTML = "Patients";

	let header_donors = document.createElement("div");
	header_donors.id = "matching-header-donors";
	header_donors.className = "matching-header-subject";
	header.appendChild(header_donors);
	header_donors.innerHTML = "Donors";

	let content = document.createElement("div");
	content.id = "matching-content";
	content_box.appendChild(content);

	let loading = document.createElement("div");
	loading.id = "matching-loading";
	loading.className = "response-loading";
	content.appendChild(loading);

}