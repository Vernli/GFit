const menuBtn = document.getElementById("menu-btn");
const heroBtn = document.querySelectorAll(".btn-hero");
const menu = document.getElementById("menu");

const videocontent = document.querySelectorAll(".video-content");
const videos = document.querySelectorAll(".video");

const button_left = document.getElementById("left");
const button_right = document.getElementById("right");
let current_video = 0;

heroBtn.forEach((btn) => {
  btn.addEventListener("click", {});
});

// Mobile
function videoToggleR(e) {
  const direction = e.target.id;
  console.log(current_video);
  switch (current_video) {
    case 0:
      videos[current_video].classList.toggle("hidden");
      direction == "right" ? (current_video = 1) : (current_video = 3);
      videos[current_video].classList.toggle("hidden");
      break;
    case 1:
      videos[current_video].classList.toggle("hidden");
      current_video = 2;
      videos[current_video].classList.toggle("hidden");
      break;
    case 2:
      videos[current_video].classList.toggle("hidden");
      direction == "right" ? (current_video = 1) : (current_video = 3);

      videos[current_video].classList.toggle("hidden");
      break;
    case 3:
      videos[current_video].classList.toggle("hidden");
      current_video = 0;
      videos[current_video].classList.toggle("hidden");
  }
}

// function videoToggleL() {
//   console.log(current_video);
//   switch (current_video) {
//     case 0:
//       videos[current_video].classList.toggle("hidden");
//       current_video = 3;
//       videos[current_video].classList.toggle("hidden");
//       break;
//     case 1:
//       videos[current_video].classList.toggle("hidden");
//       current_video = 2;
//       videos[current_video].classList.toggle("hidden");
//       break;
//     case 2:
//       videos[current_video].classList.toggle("hidden");
//       current_video = 1;
//       videos[current_video].classList.toggle("hidden");
//       break;
//     case 3:
//       videos[current_video].classList.toggle("hidden");
//       current_video = 0;
//       videos[current_video].classList.toggle("hidden");
//   }
// if (current_video == 0) {
//   videos[current_video].classList.toggle("hidden");
//   current_video = 3;
//   videos[current_video].classList.toggle("hidden");
// } else if (current_video == 3) {
//   videos[current_video].classList.toggle("hidden");
//   current_video = 2;
//   videos[current_video].classList.toggle("hidden");
// } else if (current_video == 2) {
//   videos[current_video].classList.toggle("hidden");
//   current_video = 1;
//   videos[current_video].classList.toggle("hidden");
// } else if (current_video == 1) {
//   videos[current_video].classList.toggle("hidden");
//   current_video = 0;
//   videos[current_video].classList.toggle("hidden");
// }
// }

function navToggle() {
  menuBtn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}

function Init() {
  menuBtn.addEventListener("click", navToggle);
  button_left.addEventListener("click", videoToggleR);
  button_right.addEventListener("click", videoToggleR);
}

Init();
