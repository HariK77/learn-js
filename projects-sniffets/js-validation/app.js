const form = document.getElementById('form');

const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm_password');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
})

function checkInputs() {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const confirmPasswordVal = confirmPassword.value.trim();

    // Username Validation
    if (usernameVal === '') {
        setErrorFor(username, 'Username field is required.');
    } else if (usernameVal.length < 5) {
        setErrorFor(username, 'Username should be more than 4 characters long.');
    } else if (usernameVal.includes(' ')) {
        setErrorFor(username, 'Username should not contain space.');
    } else {
        setSuccessFor(username);
    }

    // Email Validation
    if (emailVal === '') {
        setErrorFor(email, 'Email field is required.');
    } else if (emailVal.includes(' ')) {
        setErrorFor(email, 'Email should not contain space.');
    } else if(!isEmail(emailVal)) {
        setErrorFor(email, 'Email is not valid.');
    } else {
        setSuccessFor(email);
    }


    // Password Validation
    if (passwordVal === '') {
        setErrorFor(password, 'Password field is required.');
    } else if (passwordVal.length < 6) {
        setErrorFor(password, 'Password should be atleast 6 characters long.');
    } else if (passwordVal.includes(' ')) {
        setErrorFor(password, 'Password should not contain space.');
    } else {
        setSuccessFor(password);
    }


    // Password Confirm Validation
    if (confirmPasswordVal === '') {
        setErrorFor(confirmPassword, 'Confirm Password field is required.');
    } else if (confirmPasswordVal !== passwordVal) {
        setErrorFor(confirmPassword, 'Passwords does not match.');
    } else {
        setSuccessFor(confirmPassword);
    }

    // const inputs = [username, email, password, confirmPassword];

    // for (let input of inputs) {
    //     if (input.value.trim() === '') {
    //         setErrorFor(input)
    //     } else {
    //         setSuccessFor(input)
    //     }
    // }

}

function setErrorFor(input, message) {
    input.parentElement.querySelector('small').innerText = message;
    input.parentElement.className = 'form-control error';
}

function setSuccessFor(input) {
    input.parentElement.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
