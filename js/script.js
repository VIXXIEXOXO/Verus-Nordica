// Mobile Menu Script
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".mobile-menu-toggle");
  const navOverlay = document.getElementById("mobileNavOverlay");
  const closeBtn = document.querySelector(".mobile-nav-close");
  const navLinks = document.querySelectorAll(".mobile-nav-link");
  // Open Mobile Menu
  function openMobileMenu() {
    navOverlay?.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  // Close Mobile Menu
  function closeMobileMenu() {
    navOverlay?.classList.remove("active");
    document.body.style.overflow = "";
  }

  // Add Event Listeners
  menuToggle?.addEventListener("click", openMobileMenu);
  closeBtn?.addEventListener("click", closeMobileMenu);

  // Add Event Listeners to Navigation Links
  navLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });
});
