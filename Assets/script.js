


let body = document.querySelector("body");

let themeToggle = function () {
  let themeToggler = document.querySelector(".theme");
let togglerCircle = document.querySelector(".circle");

  themeToggler.addEventListener("click", () => {
    togglerCircle.classList.toggle("toggler");
  });
};

let sideBar = function () {
  let menuIcon = document.querySelector(".menu-icon");
let mobileNav = document.querySelector(".mobile-nav");
let overlay = document.querySelector(".overlayer");



  menuIcon.addEventListener("click", () => {
    mobileNav.style.transform = "translateY(0)";
    overlay.classList.add("overlay");
  });

  overlay.addEventListener("click", () => {
    mobileNav.style.transform = "translateY(-100vh)";
    overlay.classList.remove("overlay");
  });
};
