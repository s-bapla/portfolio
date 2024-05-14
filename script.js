document.addEventListener("click", (e) => {
  const menuIcon = document.querySelector("#menu-icon");
  const isMenuIcon = e.target === menuIcon;
  const navbar = document.querySelector(".navbar-container");
  const mainContent = document.querySelector(".main-content");
  const img = document.querySelector("#world");
  if (isMenuIcon) {
    navbar.classList.toggle("active");
  }
  if (e.target.closest(".main-content") !== null || e.target === img) {
    navbar.classList.remove("active");
  }
});

let typed = new Typed("#typed-text", {
  strings: ["Computer science student", "Fullstack web developer"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});

window.addEventListener("resize", (e) => {
  const navbar = document.querySelector(".navbar-container");
  if (innerWidth > 768) {
    navbar.classList.remove("active");
  }
});
