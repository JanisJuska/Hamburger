const navBar = document.querySelector(".nav-list");
const navBurger = document.querySelector(".burger");
// const burgerLines = document.querySelectorAll(".burger div");

navBurger.addEventListener("click", () => {
  navBar.classList.toggle("nav-change");

  navBurger.classList.toggle("burger-change");
});
