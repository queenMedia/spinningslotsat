const openModalBtns = document.querySelectorAll(".openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("modal");

const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");

const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const emailError = document.getElementById("emailError");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function openModal() {
  modal.style.display = "flex";
  modalOverlay.style.display = "block";
  body.style.overflow = "hidden";
}

function closeModal() {
  modal.style.display = "none";
  modalOverlay.style.display = "none";
  body.style.overflow = "auto";
  clearErrors();
}

function clearErrors() {
  firstNameError.textContent = "";
  lastNameError.textContent = "";
  emailError.textContent = "";
  firstName.classList.remove("error");
  lastName.classList.remove("error");
  email.classList.remove("error");
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  clearErrors();

  let hasErrors = false;

  if (!firstName.value) {
    firstName.classList.add("error");
    firstNameError.style.display = "block";
    firstNameError.textContent = "Enter your name";
    hasErrors = true;
  }

  if (!lastName.value) {
    lastName.classList.add("error");
    lastNameError.style.display = "block";
    lastNameError.textContent = "Enter your last name";
    hasErrors = true;
  }

  if (!email.value) {
    email.classList.add("error");
    emailError.style.display = "block";
    emailError.textContent = "Enter your email";
    hasErrors = true;
  } else if (!emailRegex.test(email.value)) {
    email.classList.add("error");
    email.style.display = "block";
    emailError.textContent = "Enter correct email address";
    hasErrors = true;
  }

  if (hasErrors) {
    return;
  }

  const btn = document.querySelector("#form button[type='submit']");
  btn.innerHTML = '<div class="loading"></div>';
  fetch(
    "https://script.google.com/macros/s/AKfycby4I2Q9Xm1I37c1iFr3DoiKeqoNccqrSTgro49XHTjaFo_Odu10B4v69mh0ynjFb5N4/exec",
    {
      method: "POST",
      mode: "no-cors",
      redirect: "follow",
      cache: "no-cache",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        site: "spinningslots",
      }),
    }
  )
    .then(() => {
      btn.innerHTML = "✓";
      // document.querySelector('form input[name="name"]').value = null;
      // document.querySelector('form input[name="email"]').value = null;
      // document.querySelector('form input[name="subject"]').value = null;
      // document.querySelector('form textarea[name="message"]').value = null;
    })
    .finally(() => {
      setTimeout(() => closeModal(), 500);
    });
});

firstName.addEventListener("input", function () {
  firstName.classList.remove("error");
  firstNameError.textContent = "";
});

lastName.addEventListener("input", function () {
  lastName.classList.remove("error");
  lastNameError.textContent = "";
});

email.addEventListener("input", function () {
  email.classList.remove("error");
  emailError.textContent = "";
});

openModalBtns.forEach((button) => {
  button.addEventListener("click", openModal);
});
closeModalBtn.addEventListener("click", closeModal);
