// Buttons
const navbarLoginBtn = document.getElementById("navbar-login-btn");
const navbarSignupBtn = document.getElementById("navbar-signup-btn");
const sliderLoginBtn = document.getElementById("slider-login-btn");
const sliderSignupBtn = document.getElementById("slider-signup-btn");
const closeLoginBtn = document.getElementById("close-login-btn");
const closeSignupBtn = document.getElementById("close-signup-btn");

// Form Containers
const loginFormContainer = document.getElementById("login-form-container");
const signupFormContainer = document.getElementById("signup-form-container");

// Open Login Form
navbarLoginBtn.addEventListener("click", () => loginFormContainer.classList.remove("hidden"));
sliderLoginBtn.addEventListener("click", () => loginFormContainer.classList.remove("hidden"));

// Open Signup Form
navbarSignupBtn.addEventListener("click", () => signupFormContainer.classList.remove("hidden"));
sliderSignupBtn.addEventListener("click", () => signupFormContainer.classList.remove("hidden"));

// Close Forms
closeLoginBtn.addEventListener("click", () => loginFormContainer.classList.add("hidden"));
closeSignupBtn.addEventListener("click", () => signupFormContainer.classList.add("hidden"));
