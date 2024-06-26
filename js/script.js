// Menu Button
const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#menu-button").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Search Button
const searchBar = document.querySelector(".search-bar");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchBar.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Shopping Cart Button
const shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
};

// Klik di Luar Elemen
const menuButton = document.querySelector("#menu-button");
const searchButton = document.querySelector("#search-button");
const shoppingCartButton = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  // Menu Button
  if (!menuButton.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  // Search Button
  if (!searchButton.contains(e.target) && !searchBar.contains(e.target)) {
    searchBar.classList.remove("active");
  }

  // Shopping Cart Button
  if (!shoppingCartButton.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Modal Box Item
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

document.querySelector(".modal .close-button").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
