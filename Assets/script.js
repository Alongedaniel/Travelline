let themeToggler = document.querySelector(".theme");
let togglerCircle = document.querySelector(".circle");

themeToggler.addEventListener("click", () => {
  togglerCircle.classList.toggle("toggler");
});
