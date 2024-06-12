var current_entry = 1;
var entries = [];

var fields = ['']
function check() {
    var ids = ['id', 'last_name', 'first_name', 'dob', 'gender', 'company', 'pin_code', 'phone', 'email'];
    for (var x in ids) {
        console.log(document.getElementById(ids[x]));
        // if (getElementById(x)==None)
        // {
        //     console.log(x);
        // }
    }
}

let loginForm = document.getElementById("b_form");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    var all = 1;

    var ids = ['id', 'last_name', 'first_name', 'dob', 'gender', 'company', 'pin_code', 'phone', 'email'];
    var h_ids = ['ID', 'Last Name', 'First Name', 'DOB', 'gender', 'company', 'Pin code', 'phone', 'email'];
    for (var x in ids) {
        console.log(document.getElementById(ids[x]).value);
        if (document.getElementById(ids[x]).value == "") {
            all = 0
            break;
        }
    }

    if (all == 0) {
        document.getElementById('error').innerText = h_ids[x] + " is not filled";
        // higlight corresponding
    }
    else if (all = 1) {
        submit();
    }
}
);


function submit() {
    var idInput = document.getElementById('id');
    var lastNameInput = document.getElementById('last_name');
    var firstNameInput = document.getElementById('first_name');
    var dobInput = document.getElementById('dob');
    var genderSelect = document.getElementById('gender');
    var companyInput = document.getElementById('company');
    var pinCodeInput = document.getElementById('pin_code');
    var phoneInput = document.getElementById('phone');
    var emailInput = document.getElementById('email');

    let user = {
        id: idInput.value,
        last_name: lastNameInput.value,
        first_name: firstNameInput.value,
        dob: dobInput.value,
        gender: genderSelect.value,
        company: companyInput.value,
        pin_code: pinCodeInput.value,
        phone: phoneInput.value,
        email: emailInput.value
    };

    let userString = JSON.stringify(user);

    if (typeof current_entry === 'undefined') {
        current_entry = 0;
    }

    current_entry = current_entry % 1001;

    // Store the stringified user object in localStorage
    localStorage.setItem(current_entry, userString);
    // Assuming entries is a global array
    if (typeof entries === 'undefined') {
        entries = [];
    }

    entries.push(current_entry);
    current_entry += 1;

    // Refresh table function (assuming you have a function to refresh the table)
    refresh_table();

    // Display toast message function (assuming you have a function to display a toast message)
    display_toast("User information saved successfully!");

    document.getElementById('id').value = "";
    document.getElementById('last_name').value = "";
    document.getElementById('first_name').value = "";
    document.getElementById('dob').value = "";
    document.getElementById('gender').value = "";
    document.getElementById('company').value = "";
    document.getElementById('pin_code').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('email').value = "";
}


function delete_user(x) {
    function notequal(value) {
        return value != x;
    }
    entries = entries.filter(notequal);
    localStorage.removeItem(x);
    console.log("Removed user " + x);

    refresh_table();

    display_toast("User "+x+" Deleted")
}

function edit_user(x)
{
    console.log("Editing "+x);
    let userString = localStorage.getItem(x);
    let user = JSON.parse(userString);

    document.getElementById('id').value = user.id;
    document.getElementById('last_name').value = user.last_name;
    document.getElementById('first_name').value = user.first_name;
    document.getElementById('dob').value = user.dob;
    document.getElementById('gender').value = user.gender;
    document.getElementById('company').value = user.company;
    document.getElementById('pin_code').value = user.pin_code;
    document.getElementById('phone').value = user.phone;
    document.getElementById('email').value = user.email;


    function notequal(value) {
        return value != x;
    }
    entries = entries.filter(notequal);
    localStorage.removeItem(x);
}

function refresh_table() {
    var table = document.getElementById("Details_table");
    table.innerHTML = `
        <tr>
            <th>S. No.</th>
            <th>ID</th>
            <th>Last Name</th>
            <th>First Name</th>
            <th>Date of Birth</th>
            <th>Gender</th>
            <th>Company/Name</th>
            <th>Pin code</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Delete User</th>
        </tr>`;

    var count=1;
    for (var x of entries) {
        let userString = localStorage.getItem(x);

        // Parse the string back into an object
        let user = JSON.parse(userString);
        var cur = `
            <tr>
                <th>${count}</th>
                <td class="edit" onclick="edit_user(${x})" style="cursor:pointer;">${user.id}</td>
                <td>${user.last_name}</td>
                <td>${user.first_name}</td>
                <td>${user.dob}</td>
                <td>${user.gender}</td>
                <td>${user.company}</td>
                <td>${user.pin_code}</td>
                <td>${user.phone}</td>
                <td>${user.email}</td>
                <td><button onclick="delete_user(${x})" title="Click to Edit"><img src="trash-2.svg"></button></td>
            </tr>`;

        count+=1;

        table.innerHTML += cur;
    }
}


function display_toast(text) {
    document.getElementById("toast").innerText = text;
    alert(text);
    return;
}