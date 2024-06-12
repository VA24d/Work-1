var current_entry = 1;

var fields=['']
function check()
{
    var ids = ['id', 'last_name', 'first_name', 'dob', 'gender', 'company', 'pin_code', 'phone', 'email'];
    for (var x in ids)
    {
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
  var all=0;

  var ids = ['id', 'last_name', 'first_name', 'dob', 'gender', 'company', 'pin_code', 'phone', 'email'];
    for (var x in ids)
    {
        console.log(document.getElementById(ids[x]).value);
        if (document.getElementById(x).value==" ")
        {
            break;
        }
    }
    if (all==0)
    {
        document.getElementById('error').innerText=x+"is not filled";
    }
    else if (all=1)
    {
        submit();
    }
  }
);


function submit()
{
    var idInput = document.getElementById('id');
    var lastNameInput = document.getElementById('last_name');
    var firstNameInput = document.getElementById('first_name');
    var dobInput = document.getElementById('dob');
    var genderSelect = document.getElementById('gender');
    var companyInput = document.getElementById('company');
    var pinCodeInput = document.getElementById('pin_code');
    var phoneInput = document.getElementById('phone');
    var emailInput = document.getElementById('email');

    // refresh table 
    // display toast
}