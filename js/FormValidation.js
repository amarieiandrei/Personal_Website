
const form = document.getElementById('form');

const firstname = document.getElementById('fname');
const lastname = document.getElementById('lname');
const email = document.getElementById('email');
const username = document.getElementById('uname');
const password = document.getElementById('psw1');
const password2 = document.getElementById('psw2');

form.addEventListener('submit', (e) => {
    if (checkInputs() !== 6) {
        e.preventDefault();
    }
});

function checkInputs() {
    let count = 0;
    // get the values from the input
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (firstnameValue === '') {
        // show error
        // add error class
        setErrorFor(firstname, 'First Name cannot be blank');
    } else {
        // add success class
        setSuccessFor(firstname);
        count += 1;
    }

    if (lastnameValue === '') {
        // show error
        // add error class
        setErrorFor(lastname, 'Last Name cannot be blank');
    } else {
        // add success class
        setSuccessFor(lastname);
        count += 1;
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
        count += 1;
    }

    if (usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
    } else if (!isUsername(usernameValue)) {
        setErrorFor(username, 'Username does not match')
    } else {
        setSuccessFor(username);
        count += 1;
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else if (!isPassword(passwordValue)) {
        setErrorFor(password, 'Password does not match');
    } else {
        setSuccessFor(password);
        count += 1;
    }

    if (password2Value === '') {
        setErrorFor(password2, 'Password2 cannot be blank');
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'Password2 does not match');
    } else {
        setSuccessFor(password2);
        count += 1;
    }
    return count;
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    // add error message inside small
    small.innerText = message;

    // add error class
    formControl.className = 'FormControl error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'FormControl success'
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPassword(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(password);
}

function isUsername(username) {
    return /^[a-z][a-z0-9_.]*$/.test(username);
}