import Calendar from "./Calendar.js";

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

InitMobile();
InitCalendar();
