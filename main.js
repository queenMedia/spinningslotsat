const body = document.body;
const openModalBtns = document.querySelectorAll(".openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("modal");
const modalOverlay = document.getElementById("modalOverlay");

const elementsToSubscribe = document.querySelectorAll(".toSubscribe");

const openMobMenu = document.querySelector(".menu-icon");
const closeMobMenu = document.querySelector(".close-icon");
const menuList = document.querySelector(".mob-links");

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

function openMenu() {
  body.style.overflow = "hidden";
  openMobMenu.style.display = "none";
  closeMobMenu.style.display = "block";
  menuList.style.display = "flex";
}

function closeMenu() {
  body.style.overflow = "auto";
  closeMobMenu.style.display = "none";
  openMobMenu.style.display = "block";
  menuList.style.display = "none";
}

function clearErrors() {
  firstNameError.textContent = "";
  lastNameError.textContent = "";
  emailError.textContent = "";
  firstName.classList.remove("error");
  lastName.classList.remove("error");
  email.classList.remove("error");
}

function moveToSubscribeBtn() {}

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
      setTimeout(() => {
        closeModal();
      }, 500);
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
elementsToSubscribe.forEach((item) => {
  item.addEventListener("click", moveToSubscribeBtn);
});
closeModalBtn.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModal);
openMobMenu.addEventListener("click", openMenu);
closeMobMenu.addEventListener("click", closeMenu);

const createFBPixel = (id) => {
  const image = document.createElement("img");
  image.id = id;
  image.width = "1";
  image.height = "1";
  image.style = "display:none; position: absolute;";
  image.src = "";
  return image;
};
const SHOT_DELAY = 1000;
const REDIRECT_DELAY = 3000;
const FB_VIEW_PIXEL = "page-view";
const FB_LEAD_PIXEL = "page-lead";

document.addEventListener("DOMContentLoaded", () => {
  let data = new URL(window.location.href).searchParams?.get("data");
  if (!data) return;
  try {
    data = JSON.parse(decodeURIComponent(dataString));
  } catch {
    return void console.log("error while parsing data");
  }

  document.body.append(createFBPixel(FB_VIEW_PIXEL));
  document.body.append(createFBPixel(FB_LEAD_PIXEL));

  setTimeout(() => {
    const { aff_sub17, aff_sub18, aff_sub19, auto_login } = data;
    if (aff_sub19) {
      const pageImg = document.getElementById(FB_VIEW_PIXEL);
      pageImg.src = `https://www.facebook.com/tr?id=${aff_sub19}&ev=PageView&noscript=1`;
      const pageLead = document.getElementById(FB_LEAD_PIXEL);
      pageLead.src = `https://www.facebook.com/tr?id=${aff_sub19}&ev=Lead&noscript=1`;
      setTimeout(function () {
        if (auto_login) {
          return void (window.location.href = auto_login);
        }
        //SHOW THANKYOU
      }, REDIRECT_DELAY);
    } else if (aff_sub17 && aff_sub18) {
      const script = document.createElement("script");
      script.src = `https://www.googletagmanager.com/gtag/js?id=AW-${aff_sub17}`;
      script.async = true;
      document.head.appendChild(script);
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", `AW-${aff_sub17}`);
      window.gtag("event", "conversion", {
        send_to: `AW-${aff_sub17}/${aff_sub18}`,
      });
      setTimeout(function () {
        if (auto_login) {
          return void (window.location.href = auto_login);
        }
        //SHOW THANKYOU
      }, REDIRECT_DELAY);
    } else {
      document.querySelector(".main").style.display = "flex";
    }
  }, SHOT_DELAY);
});
