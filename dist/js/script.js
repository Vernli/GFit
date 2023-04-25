const menu_btn = document.getElementById("menu-btn");
const hero_btn = document.querySelectorAll(".btn-hero");
const menu = document.getElementById("menu");

const videocontent = document.querySelectorAll(".video-content");
const videos = document.querySelectorAll(".video");

const button_left = document.getElementById("prev");
const button_right = document.getElementById("next");
let current_video = 0;

hero_btn.forEach((btn) => {
  btn.addEventListener("click", {});
});

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

function InitMobile() {
  menu_btn.addEventListener("click", navToggle);
  button_left.addEventListener("click", showVideo);
  button_right.addEventListener("click", showVideo);
}
InitMobile();

// Calendar
const date = new Date();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dateInput = document.querySelectorAll("input[type='date']");
function setTodayDate() {
  dateInput.forEach((input) => {
    input.value = `${date.getFullYear()}-${
      date.getMonth() <= 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
    }-${date.getDate() <= 9 ? "0" + date.Date() : date.getDate()}`;
  });
}
window.addEventListener("DOMContentLoaded", setTodayDate);
function renderCalendar() {}
