// Toggle Class Active
const navBarNav = document.querySelector(".navbar-nav");

// Ketika Hamburger Menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navBarNav.classList.toggle("active");
};

// klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navBarNav.contains(e.target)) {
    navBarNav.classList.remove("active");
  }
});
