// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika basketball menu di klick
document.querySelector("#basketball-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// agar close menu click di sidebar

const basketball = document.querySelector("#basketball-menu");

document.addEventListener("click", function (e) {
  if (!basketball.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
