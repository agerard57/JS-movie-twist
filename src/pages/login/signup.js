const loginForm = document.querySelector(".form-login");
const formData = new FormData(loginForm);
const formProps = Object.fromEntries(formData);
console.log(formProps);
