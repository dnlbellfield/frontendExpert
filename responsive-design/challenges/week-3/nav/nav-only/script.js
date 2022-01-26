const myNavToggle = document.querySelector(".nav-toggle");
const myNav = document.querySelector(".nav");

myNavToggle.addEventListener("click", () => {
  myNav.classList.toggle("nav--visible");
});
