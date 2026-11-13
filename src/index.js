import "./style.css";
import homePage from "./pages/home.js";
import menuPage from "./pages/menu.js";
import aboutPage from "./pages/about.js";
const content = document.querySelector("#content");
const navButtons = document.querySelectorAll(".nav-btn");
const pages = {
  home: homePage,
  menu: menuPage,
  about: aboutPage,
};

function showPage(name) {
  content.replaceChildren(pages[name]());
  navButtons.forEach((button) => {
    const isActive = button.dataset.page === name;
    button.classList.toggle("active", isActive);
    if (isActive) {
      button.setAttribute("aria-current", "page");
    } else {
      button.removeAttribute("aria-current");
    }
  });
  window.scrollTo(0, 0);
}
navButtons.forEach((button) => {
  button.addEventListener("click", () => showPage(button.dataset.page));
});
showPage("home");