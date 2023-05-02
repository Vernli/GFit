import Calendar from "./calendar.js";

// Navbar
const menu_btn = document.getElementById("menu-btn");
const hero_btn = document.querySelectorAll(".btn-hero");
const menu = document.getElementById("menu");

// Video
const videocontent = document.querySelectorAll(".video-content");
const videos = document.querySelectorAll(".video");
const button_left = document.getElementById("prev");
const button_right = document.getElementById("next");
let current_video = 0;

// Mobile
function showVideo(e) {
  const direction = e.target.id;
  switch (current_video) {
    case 0:
      videos[current_video].classList.toggle("hidden");
      direction === "next" ? (current_video = 1) : (current_video = 3);
      videos[current_video].classList.toggle("hidden");
      break;
    case 1:
      videos[current_video].classList.toggle("hidden");
      direction === "next" ? (current_video = 2) : (current_video = 0);
      videos[current_video].classList.toggle("hidden");
      break;
    case 2:
      videos[current_video].classList.toggle("hidden");
      direction === "next" ? (current_video = 3) : (current_video = 1);
      videos[current_video].classList.toggle("hidden");
      break;
    case 3:
      videos[current_video].classList.toggle("hidden");
      direction === "next" ? (current_video = 0) : (current_video = 2);
      videos[current_video].classList.toggle("hidden");
  }
}

function navToggle() {
  menu_btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}

function InitCalendar() {
  const offerOne = new Calendar(document.getElementById("offer-one"));
  const offerTwo = new Calendar(document.getElementById("offer-two"));
  Calendar.setTodayDate();
  offerOne.renderCalendar();
  offerTwo.renderCalendar();
}

function InitMobile() {
  menu_btn.addEventListener("click", navToggle);
  button_left.addEventListener("click", showVideo);
  button_right.addEventListener("click", showVideo);
}

// Animation on scroll
function reveal() {
  const offers = document.getElementById("offers");

  const windowheight = window.innerHeight;
  const revealtop = offers.getBoundingClientRect().top;
  const revealpoint = 200;

  if (revealtop < windowheight - revealpoint) {
    offers.classList.add("show");
  } else {
    offers.classList.remove("show");
  }
}
window.addEventListener("scroll", reveal);

InitMobile();
InitCalendar();

function BenefitList(price, freeze, vip) {
  this.price = price.toUpperCase();
  this.freeze = freeze.toUpperCase();
  this.vip = vip.toUpperCase();
}

function changeBenefits(object, where) {
  const benefits = where.querySelector(".benefits");
  benefits.children[0].innerHTML = `Opłata wpisowa: <span class='font-bold'>${object.price}</span>`;
  benefits.children[1].innerHTML = `Nielimitowany dostęp 24H: <span class="font-bold">TAK</span>`;
  benefits.children[2].innerHTML = `Zajęcia grupowe w cenie: <span class="font-bold">TAK</span>`;
  benefits.children[3].innerHTML = `Możliwość zamrożenia karnetu: <span class="font-bold">${object.freeze}</span>`;
  benefits.children[4].innerHTML = `Strefa VIP: <span class="font-bold">${object.vip}</span>`;
}

// Change offer info values
function changeOfferInfo(e) {
  const chosenValue = e.target.options[e.target.selectedIndex].value;
  const offerBlock = e.target.parentElement.parentElement.parentElement;
  const price = e.target.parentElement.parentElement.querySelector(".price");
  const blockID = e.target.id;

  switch (chosenValue) {
    case "k24h": {
      if (blockID === "select-open") {
        price.innerText = "34.99 PLN";
        changeBenefits(new BenefitList("Nie", "Nie", "Nie"), offerBlock);
      } else if (blockID === "select-pro") {
        price.innerText = "69.99 PLN";
        changeBenefits(new BenefitList("Nie", "Nie", "Tak"), offerBlock);
      }
      break;
    }
    case "k7d":
      if (blockID === "select-open") {
        price.innerText = "79.99 PLN";
        changeBenefits(new BenefitList("Nie", "Nie", "Nie"), offerBlock);
      } else if (blockID === "select-pro") {
        price.innerText = "129.99 PLN";
        changeBenefits(new BenefitList("Nie", "Nie", "Tak"), offerBlock);
      }
      break;
    case "k1m":
      if (blockID === "select-open") {
        price.innerText = "99.99 PLN";
        changeBenefits(new BenefitList("21.99 PLN", "Nie", "Nie"), offerBlock);
      } else if (blockID === "select-pro") {
        price.innerText = "259.99 PLN";
        changeBenefits(new BenefitList("99.99 PLN", "Tak", "Tak"), offerBlock);
      }

      break;

    case "k6m":
      if (blockID === "select-open") {
        price.innerText = "479.99 PLN";
        changeBenefits(new BenefitList("21.99 PLN", "Tak", "Nie"), offerBlock);
      } else if (blockID === "select-pro") {
        price.innerText = "879.99 PLN";
        changeBenefits(new BenefitList("99.99 PLN", "Tak", "Tak"), offerBlock);
      }

      break;
    case "k12m":
      if (blockID === "select-open") {
        price.innerText = "899.99 PLN";
        changeBenefits(new BenefitList("21.99 PLN", "Tak", "Nie"), offerBlock);
      } else if (blockID === "select-pro") {
        price.innerText = "1279.99 PLN";
        changeBenefits(new BenefitList("99.99 PLN", "Tak", "Tak"), offerBlock);
      }
      break;
  }
}

document
  .querySelector("#select-open")
  .addEventListener("change", changeOfferInfo);

document
  .querySelector("#select-pro")
  .addEventListener("change", changeOfferInfo);
