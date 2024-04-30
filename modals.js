const modalOverlay = document.getElementById("modalOverlay");

//popup of terms and conditions
const openModalInfoBtn = document.getElementById("openModalInfoBtn");
const closeModalInfoBtn = document.getElementById("closeModalInfoBtn");
const modalInfo = document.getElementById("modal-info");

function openModalInfo() {
  modalInfo.style.display = "flex";
  modalOverlay.style.display = "block";
  body.style.overflow = "hidden";
}

function closeModalInfo() {
  modalInfo.style.display = "none";
  modalOverlay.style.display = "none";
  body.style.overflow = "auto";
}

openModalInfoBtn.addEventListener("click", openModalInfo);
closeModalInfoBtn.addEventListener("click", closeModalInfo);

//popup of privacy policy
const openModalPrivacyBtn = document.getElementById("openModalPrivacyBtn");
const closeModalPrivacyBtn = document.getElementById("closeModalPrivacyBtn");
const modalPrivacy = document.getElementById("modal-privacy");

function openModalPrivacy() {
  modalPrivacy.style.display = "flex";
  modalOverlay.style.display = "block";
  body.style.overflow = "hidden";
}

function closeModalPrivacy() {
  modalPrivacy.style.display = "none";
  modalOverlay.style.display = "none";
  body.style.overflow = "auto";
}

openModalPrivacyBtn.addEventListener("click", openModalPrivacy);
closeModalPrivacyBtn.addEventListener("click", closeModalPrivacy);

//popup of cookies policy
const openModalCookiesBtn = document.getElementById("openModalCookiesBtn");
const closeModalCookiesBtn = document.getElementById("closeModalCookiesBtn");
const modalCookies = document.getElementById("modal-cookies");

function openModalCookies() {
  modalCookies.style.display = "flex";
  modalOverlay.style.display = "block";
  body.style.overflow = "hidden";
}

function closeModalCookies() {
  modalCookies.style.display = "none";
  modalOverlay.style.display = "none";
  body.style.overflow = "auto";
}

openModalCookiesBtn.addEventListener("click", openModalCookies);
closeModalCookiesBtn.addEventListener("click", closeModalCookies);

//popup of disclaimer
const openModalDisclaimerBtn = document.getElementById("openModalDisclaimerBtn");
const closeModalDisclaimerBtn = document.getElementById("closeModalDisclaimerBtn");
const modalDisclaimer = document.getElementById("modal-disclaimer");

function openModalDisclaimer() {
  modalDisclaimer.style.display = "flex";
  modalOverlay.style.display = "block";
  body.style.overflow = "hidden";
}

function closeModalDisclaimer() {
  modalDisclaimer.style.display = "none";
  modalOverlay.style.display = "none";
  body.style.overflow = "auto";
}

openModalDisclaimerBtn.addEventListener("click", openModalDisclaimer);
closeModalDisclaimerBtn.addEventListener("click", closeModalDisclaimer);

modalOverlay.addEventListener("click", function() {
  closeModalInfo()
  closeModal()
  closeModalPrivacy()
  closeModalCookies()
  closeModalDisclaimer()
});
