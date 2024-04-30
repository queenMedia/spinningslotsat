const body = document.body;
const elementsToSubscribe = document.querySelectorAll(".toSubscribe");

const openMobMenu = document.querySelector(".menu-icon");
const closeMobMenu = document.querySelector(".close-icon");
const menuList = document.querySelector(".mob-links");

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

function moveToSubscribeBtn() {
  const subscribeElement = document.getElementById("subscribe");

  window.location.hash = "subscribe";
  subscribeElement.scrollIntoView({
    behavior: "smooth",
  });
}

elementsToSubscribe.forEach((item) => {
  item.addEventListener("click", moveToSubscribeBtn);
});

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
