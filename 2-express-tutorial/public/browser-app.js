const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // Toggle both the navigation links and sidebar visibility
  links.classList.toggle("show-links");
});
