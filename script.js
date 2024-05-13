document.addEventListener("click", (e) => {
  const menuIcon = document.querySelector("#menu-icon");
  const isMenuIcon = e.target === menuIcon;
  const navbar = document.querySelector(".navbar-container");
  const mainContent = document.querySelector(".main-content");
  if (isMenuIcon) {
    navbar.classList.toggle("active");
    mainContent.classList.toggle("active");
  }
  if (e.target === mainContent) {
    navbar.classList.remove("active");
    mainContent.classList.remove("active");
  }
});

let typed = new Typed("#typed-text", {
  strings: ["Computer science student", "Fullstack web developer"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});
