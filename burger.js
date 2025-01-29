const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");
const menuHover = document.querySelector(".menu_hover");

// åbner burger og nav --> toogle = tilføjer eller fjerne class
burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}

// lukker navigationdn
menu.addEventListener("click", menuClick);
function menuClick() {
  burger.classList.remove("active");
  nav.classList.remove("active");
}

// dokument er loaded skal der ske det her
// hvis menu og menuhover har classen active skal der stå luk, hvis den ikke har classen active skal der stå menu
// skulle selvfølgelig stå active og ikke open
document.addEventListener("DOMContentLoaded", () => {
  burger.addEventListener("click", () => {
    menu.classList.toggle("open");
    menuHover.classList.toggle("active");

    if (menu.classList.contains("open")) {
      menuHover.textContent = "[LUK]";
    } else {
      menuHover.textContent = "[MENU]";
    }
  });
});
