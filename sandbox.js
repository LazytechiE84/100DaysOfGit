const fullName = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("submit");

submit.addEventListener("click", e => {
    e.preventDefault();

    // Validate name
    if (fullName.value.length < 1) {
        fullName.classList.add('invalid');
        fullName.classList.remove('valid');
    } else {
        fullName.classList.add('valid');
        fullName.classList.remove('invalid');
    }

    // Validate email
    if (!email.value.includes("@")) {
        email.classList.add('invalid');
        email.classList.remove('valid');
    } else {
        email.classList.add('valid');
        email.classList.remove('invalid');
    }

    // Validate password
    if (password.value.length < 8) {
        password.classList.add('invalid');
        password.classList.remove('valid');
    } else {
        password.classList.add('valid');
        password.classList.remove('invalid');
    }
});