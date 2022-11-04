const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const scrollLock = document.querySelector(".lock");
const toggleSubmenu = document.querySelector(".toggle-sub-menu");
const toggleSubmenu2 = document.querySelector(".company-menu");

// Mobile Menu Open/Close
navToggle.addEventListener("click", () => {
  const background = document.querySelector(".overlay");
  const visibility = primaryNav.getAttribute("data-visible");
  const scrollY = scrollLock.style.top;
 

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
    background.style.display = "block";
    scrollLock.style.position = "fixed";
    scrollLock.style.top = `${window.scrollY}px`;
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
    background.style.display = "none";
    scrollLock.style.position = "";
    scrollLock.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  }
});

//  Open/Close FEATURES Submenu
toggleSubmenu.addEventListener("click", () => {
  const dropdownContent = document.querySelector(".dropdown-content");
  const subShown = dropdownContent.getAttribute("data-visible");

  if (subShown === "false") {
    dropdownContent.setAttribute("data-visible", true);
    dropdownContent.style.display = "block";
    toggleSubmenu.setAttribute("aria-expanded", true);
  } else if (subShown === "true") {
    dropdownContent.setAttribute("data-visible", false);
    dropdownContent.style.display = "none";
    toggleSubmenu.setAttribute("aria-expanded", false);
  }
});

// Open/Close COMPANY Submenu
toggleSubmenu2.addEventListener("click", () => {
  const companyContent = document.querySelector(".company-content");
  const dataShown = companyContent.getAttribute("data-visible");

  if (dataShown === "false") {
    companyContent.setAttribute("data-visible", true);
    companyContent.style.display = "block";
    toggleSubmenu2.setAttribute("aria-expanded", true);
  } else if (dataShown === "true") {
    companyContent.setAttribute("data-visible", false);
    companyContent.style.display = "none";
    toggleSubmenu2.setAttribute("aria-expanded", false);
  }
});
