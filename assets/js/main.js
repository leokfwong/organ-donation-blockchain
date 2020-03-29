const input_names = ["form-firstname-input", "form-lastname-input", "form-bloodtype-input", "form-medid-input", "form-height-input", "form-weight-input"];

const capitalize = (s) => {
	if (typeof s !== 'string') return ''
	return s.charAt(0).toUpperCase() + s.slice(1)
}

window.onload = function() {

	let add_donor_menu = document.getElementById('menu-item-1');
	add_donor_menu.addEventListener('click', function() {
		loadAddCandidateForm("donor");
	});

	let view_donors_list = document.getElementById('menu-item-2');
	view_donors_list.addEventListener("click", function() {
		viewCandidateList("donor");
	});

	let add_patient_menu = document.getElementById('menu-item-3');
	add_patient_menu.addEventListener('click', function() {
		loadAddCandidateForm("patient");
	});

	let view_patients_list = document.getElementById('menu-item-4');
	view_patients_list.addEventListener("click", function() {
		viewCandidateList("patient");
	});

	let find_matching = document.getElementById("menu-item-5");
	find_matching.addEventListener("click", function() {
		findMatchings();
		fetchDonorsPatients();
	});

	let back_button = document.getElementById("page-back");
	back_button.addEventListener("click", function() {
		loadMenuBox();
	});

}

function loadMenuBox() {

	let menu_box = document.getElementById("menu-box");
	menu_box.style.display = "flex";

	let back_button = document.getElementById("page-back");
	back_button.style.display = "none";

	let content_box = document.getElementById("content-box");
	content_box.style.display = "none";

	let page_title = document.getElementById("page-title");
	page_title.innerHTML = "Home";

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

	let form_bloodtype_input = document.createElement("input");
	form_bloodtype_input.id = "form-bloodtype-input";
	form_bloodtype_input.className = "form-input";
	form_bloodtype.appendChild(form_bloodtype_input);

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

	let form_response_message = document.createElement("div");
	form_response_message.id = "form-response-message";
	form_response.appendChild(form_response_message);

	form_submit_button.addEventListener('click', function() {
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
	});

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
	page_title.innerHTML = "View " + type + " list";

	// List container
	let list_container = document.createElement("div");
	list_container.id = "list-container";
	content_box.appendChild(list_container);

	let list_loading = document.createElement("div");
	list_loading.id = "list-loading";
	list_container.appendChild(list_loading);
	list_loading.innerHTML = "Loading...";

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
	content.appendChild(loading);
	loading.innerHTML = "Loading...";

}