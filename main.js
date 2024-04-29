const openModalBtns = document.querySelectorAll('.openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const openMobMenu = document.querySelector('.menu-icon');
const closeMobMenu = document.querySelector('.close-icon');
const menuList = document.querySelector('.mob-links');
const modal = document.getElementById('modal');
const modalOverlay = document.getElementById('modalOverlay');
const form = document.getElementById('form');
const firstNameError = document.getElementById('firstNameError');
const lastNameError = document.getElementById('lastNameError');
const emailError = document.getElementById('emailError');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const body = document.body;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function openModal() {
  modal.style.display = 'flex';
  modalOverlay.style.display = 'block';
  body.style.overflow = 'hidden';
}

function closeModal() {
  modal.style.display = 'none';
  modalOverlay.style.display = 'none';
  body.style.overflow = 'auto';
  clearErrors();
}

function openMenu() {
  body.style.overflow = 'hidden';
  openMobMenu.style.display = 'none';
  closeMobMenu.style.display = 'block';
  menuList.style.display = 'flex';
}

function closeMenu() {
  body.style.overflow = 'auto';
  closeMobMenu.style.display = 'none';
  openMobMenu.style.display = 'block';
  menuList.style.display = 'none';
}

function clearErrors() {
  firstNameError.textContent = '';
  lastNameError.textContent = '';
  emailError.textContent = '';
  firstName.classList.remove('error');
  lastName.classList.remove('error');
  email.classList.remove('error');
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  clearErrors();
  
  let hasErrors = false;
  
  if (!firstName.value) {
    firstName.classList.add('error');
    firstNameError.style.display = 'block';
    firstNameError.textContent = 'Enter your name';
    hasErrors = true;
  }
  
  if (!lastName.value) {
    lastName.classList.add('error');
    lastNameError.style.display = 'block';
    lastNameError.textContent = 'Enter your last name';
    hasErrors = true;
  }
  
  if (!email.value) {
    email.classList.add('error');
    emailError.style.display = 'block';
    emailError.textContent = 'Enter your email';
    hasErrors = true;
  } else if (!emailRegex.test(email.value)) {
    email.classList.add('error');
    email.style.display = 'block';
    emailError.textContent = 'Enter correct email address';
    hasErrors = true;
  }
  
  if (hasErrors) {
    return;
  }
  
  console.log('Name:', firstName.value);
  console.log('Last name:', lastName.value);
  console.log('Email:', email.value);
  
  closeModal();
});

firstName.addEventListener('input', function () {
  firstName.classList.remove('error');
  firstNameError.textContent = '';
});

lastName.addEventListener('input', function () {
  lastName.classList.remove('error');
  lastNameError.textContent = '';
});

email.addEventListener('input', function () {
  email.classList.remove('error');
  emailError.textContent = '';
});

openModalBtns.forEach(button => {
  button.addEventListener('click', openModal);
})
closeModalBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);
openMobMenu.addEventListener('click', openMenu);
closeMobMenu.addEventListener('click', closeMenu);
