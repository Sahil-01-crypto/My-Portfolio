document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".navmenu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    const icon = hamburger.querySelector("i");
    const isOpen = navMenu.classList.contains("active");
    hamburger.setAttribute("aria-expanded", String(isOpen));
    icon.classList.toggle("ri-menu-3-line", !isOpen);
    icon.classList.toggle("ri-close-line", isOpen);
  });

 
  document.querySelectorAll(".navmenu a").forEach(a => {
    a.addEventListener("click", () => {
      navMenu.classList.remove("active");
      const icon = hamburger.querySelector("i");
      hamburger.setAttribute("aria-expanded", "false");
      icon.classList.add("ri-menu-3-line");
      icon.classList.remove("ri-close-line");
    });
  });
});
