const d = document;

import darkMode from "./theme-dark.js";
import scrollButton from "./scrollbtn.js";

d.addEventListener("DOMContentLoaded", (e) => {
  scrollButton(".scroll__btn");
});

darkMode(".menu__btn--theme", "dark-theme");
// networkStatus();
