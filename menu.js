const nav = document.querySelector(".nav");

const menu = document.querySelector(".menu");

const closeButton = document.querySelector(".close");

const body = document.querySelector(".body");

menu.addEventListener("click", () => {
  nav.classList.add("nav--show");
  menu.classList.add("menu--hide");
  closeButton.classList.add("close--show");
  body.classList.add("body--no-scroll");
});

closeButton.addEventListener("click", () => {
  nav.classList.remove("nav--show");
  menu.classList.remove("menu--hide");
  closeButton.classList.remove("close--show");
  body.classList.remove("body--no-scroll");
});
