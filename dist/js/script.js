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

// Calendar
const container = document.querySelector(".calendar-container");
const dateInput = document.querySelectorAll("input[type='date']");

const todayDate = new Date();
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

function setTodayDate() {
  dateInput.forEach((input) => {
    input.value = `${todayDate.getFullYear()}-${
      todayDate.getMonth() <= 9
        ? "0" + (todayDate.getMonth() + 1)
        : todayDate.getMonth() + 1
    }-${
      todayDate.getDate() <= 9 ? "0" + todayDate.getDate() : todayDate.getDate()
    }`;
  });
}

function renderCalendar(destination) {
  date.setDate(1);
  const instance = document.querySelector(destination);
  console.log(instance);

  const monthDays = instance.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  instance.querySelector(".date h1").innerHTML = months[date.getMonth()];

  instance.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    days += `<div class="current-date">${i}</div>`;
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
}

function monthsEvents(destination) {
  const instance = document.querySelector(destination);
  instance.querySelector(".prev-month").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar(destination);
  });

  instance.querySelector(".next-month").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar(destination);
  });
}

function changeActiveDate(destination) {
  const instance = document.querySelector(destination);

  instance.querySelector(".days").addEventListener("click", (e) => {
    const activeElement = instance.querySelector(".active-date");
    console.log(activeElement);
    if (activeElement === null) {
      e.target.classList.add("active-date");
    } else {
      activeElement.classList.remove("active-date");
      e.target.classList.add("active-date");
    }
  });
}

function updateDateInput(destination) {
  const instance = document.querySelector(destination);
  const dateInput = instance.querySelector("input[type='date']");

  instance.querySelector(".days").addEventListener("click", (e) => {
    let month = instance.querySelector(".date h1").innerText.toLowerCase();
    if (e.target.classList.contains("prev-date")) {
      month = months
        .indexOf(month.charAt(0).toUpperCase() + month.slice(1))
        .toString();
      dateInput.value = `${date.getFullYear()}-${
        month.length <= 1 ? "0" + month : month
      }-${e.target.innerText}`;
    } else if (e.target.classList.contains("next-date")) {
      month = (
        months.indexOf(month.charAt(0).toUpperCase() + month.slice(1)) + 2
      ).toString();
      dateInput.value = `${date.getFullYear()}-${
        month.length <= 1 ? "0" + month : month
      }-${"0" + e.target.innerText}`;
    } else {
      month = (
        months.indexOf(month.charAt(0).toUpperCase() + month.slice(1)) + 1
      ).toString();
      dateInput.value = `${date.getFullYear()}-${
        month.length <= 1 ? "0" + month : month
      }-${
        e.target.innerText.length <= 1
          ? "0" + e.target.innerText
          : e.target.innerText
      }`;
    }
  });
}

function InitMobile() {
  menu_btn.addEventListener("click", navToggle);
  button_left.addEventListener("click", showVideo);
  button_right.addEventListener("click", showVideo);
}

function InitCalendar() {
  setTodayDate();
  renderCalendar("#offer-one");
  renderCalendar("#offer-two");
  monthsEvents("#offer-one");
  monthsEvents("#offer-two");
  updateDateInput("#offer-one");
  updateDateInput("#offer-two");
  changeActiveDate("#offer-one");
  changeActiveDate("#offer-two");
}

InitMobile();
InitCalendar();
