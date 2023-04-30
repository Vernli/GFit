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

function InitMobile() {
  menu_btn.addEventListener("click", navToggle);
  button_left.addEventListener("click", showVideo);
  button_right.addEventListener("click", showVideo);
}
InitMobile();

// Calendar
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
setTodayDate();

//
// const renderCalendar = () => {
//   date.setDate(1);

//   const monthDays = document.querySelector(".days");

//   const lastDay = new Date(
//     date.getFullYear(),
//     date.getMonth() + 1,
//     0
//   ).getDate();

//   const prevLastDay = new Date(
//     date.getFullYear(),
//     date.getMonth(),
//     0
//   ).getDate();

//   const firstDayIndex = date.getDay();

//   const lastDayIndex = new Date(
//     date.getFullYear(),
//     date.getMonth() + 1,
//     0
//   ).getDay();

//   const nextDays = 7 - lastDayIndex - 1;

//   document.querySelector(".date h1").innerHTML = months[date.getMonth()];

//   document.querySelector(".date p").innerHTML = new Date().toDateString();

//   let days = "";

//   for (let x = firstDayIndex; x > 0; x--) {
//     days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
//   }

//   for (let i = 1; i <= lastDay; i++) {
//     if (
//       i === new Date().getDate() &&
//       date.getMonth() === new Date().getMonth()
//     ) {
//       days += `<div class="today">${i}</div>`;
//     } else {
//       days += `<div>${i}</div>`;
//     }
//   }

//   for (let j = 1; j <= nextDays; j++) {
//     days += `<div class="next-date">${j}</div>`;
//     monthDays.innerHTML = days;
//   }
// };

// document.querySelector(".prev").addEventListener("click", () => {
//   date.setMonth(date.getMonth() - 1);
//   renderCalendar();
// });

// document.querySelector(".next").addEventListener("click", () => {
//   date.setMonth(date.getMonth() + 1);
//   renderCalendar();
// });

// document.querySelector(".days").addEventListener("click", (e) => {
//   let month = document.querySelector(".date h1").innerText.toLowerCase();
//   if (e.target.classList.contains("prev-date")) {
//     month = months
//       .indexOf(month.charAt(0).toUpperCase() + month.slice(1))
//       .toString();
//     dateInput[0].value = `${date.getFullYear()}-${
//       month.length <= 1 ? "0" + month : month
//     }-${e.target.innerText}`;
//   } else if (e.target.classList.contains("next-date")) {
//     month = (
//       months.indexOf(month.charAt(0).toUpperCase() + month.slice(1)) + 2
//     ).toString();
//     dateInput[0].value = `${date.getFullYear()}-${
//       month.length <= 1 ? "0" + month : month
//     }-${"0" + e.target.innerText}`;
//   } else {
//     month = (
//       months.indexOf(month.charAt(0).toUpperCase() + month.slice(1)) + 1
//     ).toString();
//     dateInput[0].value = `${date.getFullYear()}-${
//       month.length <= 1 ? "0" + month : month
//     }-${
//       e.target.innerText.length <= 1
//         ? "0" + e.target.innerText
//         : e.target.innerText
//     }`;
//   }
// });
// renderCalendar();
