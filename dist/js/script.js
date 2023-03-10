const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

const video_content = document.querySelectorAll(".video-content");
const videos = document.querySelectorAll(".video");

const button_left = document.getElementById("left");
const button_right = document.getElementById("right");
let current_video = 0;

function videoToggleR() {
  console.log(current_video);
  if (current_video == 0) {
    // Hide current
    videos[current_video].classList.toggle("hidden");
    current_video = 1;
    // Show next
    videos[current_video].classList.toggle("hidden");
  } else if (current_video == 1) {
    videos[current_video].classList.toggle("hidden");
    current_video = 2;
    videos[current_video].classList.toggle("hidden");
  } else if (current_video == 2) {
    videos[current_video].classList.toggle("hidden");
    current_video = 3;
    videos[current_video].classList.toggle("hidden");
  } else if (current_video == 3) {
    videos[current_video].classList.toggle("hidden");
    current_video = 0;
    videos[current_video].classList.toggle("hidden");
  }
}

function videoToggleL() {
  if (current_video == 0) {
    videos[current_video].classList.toggle("hidden");
    current_video = 3;
    videos[current_video].classList.toggle("hidden");
  } else if (current_video == 3) {
    videos[current_video].classList.toggle("hidden");
    current_video = 2;
    videos[current_video].classList.toggle("hidden");
  } else if (current_video == 2) {
    videos[current_video].classList.toggle("hidden");
    current_video = 1;
    videos[current_video].classList.toggle("hidden");
  } else if (current_video == 1) {
    videos[current_video].classList.toggle("hidden");
    current_video = 0;
    videos[current_video].classList.toggle("hidden");
  }
}

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}

function Init() {
  btn.addEventListener("click", navToggle);

  button_left.addEventListener("click", videoToggleL);
  button_right.addEventListener("click", videoToggleR);
}

Init();
