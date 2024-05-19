// Menu
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#menu-button").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// Search Bar
const searchBar = document.querySelector(".search-bar");
const searchBox = document.querySelector("#search-box");
document.querySelector("#search-button").onclick = (e) => {
  searchBar.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Click Outside of an Element
const menuButton = document.querySelector("#menu-button");
const searchButton = document.querySelector("#search-button");
document.addEventListener("click", function (e) {
  // Menu
  if (!menuButton.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  // Search Bar
  if (!searchButton.contains(e.target) && !searchBar.contains(e.target)) {
    searchBar.classList.remove("active");
  }
});
