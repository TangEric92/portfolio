const changeTheme = document.querySelector(".change-theme");

const header = document.querySelector("header");
const footer = document.querySelector(".footer-area");
const about = document.querySelector("#about");
const resume = document.querySelector("#resume");

const section = document.querySelectorAll(".section-padding");

// add class change on h1 click
changeTheme.addEventListener("click", () => {
  header.classList.toggle("dark");
  about.classList.toggle("dark");
  resume.classList.toggle("dark");

  footer.classList.toggle("dark");
});
