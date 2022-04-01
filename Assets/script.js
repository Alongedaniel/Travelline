let themeToggler = document.querySelectorAll(".theme");
let togglerCircle = document.querySelectorAll(".circle");
let menuIcon = document.querySelector(".menu-icon");
let mobileNav = document.querySelector(".mobile-nav");
let overlay = document.querySelector(".overlayer");
let closeIcon = document.querySelector('.close')

for (let i = 0; i < themeToggler.length; i++) {
  themeToggler[i].addEventListener("click", () => {
    togglerCircle.forEach((circle) => circle.classList.toggle("toggler"));
    document.body.classList.toggle("dark-theme");
  });
}

let sideBar = function () {
  menuIcon.addEventListener("click", () => {
    mobileNav.style.transform = "translateY(0)";
    overlay.classList.add("overlay");
  });

  overlay.addEventListener("click", () => {
    mobileNav.style.transform = "translateY(-100vh)";
    overlay.classList.remove("overlay");
  });
  closeIcon.addEventListener("click", () => {
    mobileNav.style.transform = "translateY(-100vh)";
    overlay.classList.remove("overlay");
  });
};


