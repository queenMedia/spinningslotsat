const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('modal');
const modalOverlay = document.getElementById('modalOverlay');
const form = document.getElementById('form');
const body = document.body;

function openModal() {
  modal.style.display = 'flex';
  modalOverlay.style.display = 'block';
  body.style.overflow = 'hidden';
}

function closeModal() {
  modal.style.display = 'none';
  modalOverlay.style.display = 'none';
  body.style.overflow = 'auto';
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
 
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  
  closeModal();
});

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);
