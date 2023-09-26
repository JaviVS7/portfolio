const d = document;
const ls = localStorage;

export default function darkMode(btn, classDark) {
  const $theme_btn = document.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]");

  console.log($selectors);

  const darkMode_ = () => {
    $selectors.forEach((elem) => {
      elem.classList.add(classDark);
      $theme_btn.firstElementChild.classList.replace("fa-moon", "fa-sun");
      ls.setItem("theme", "dark");
    });
  };
  const lightMode_ = () => {
    $selectors.forEach((elem) => {
      elem.classList.remove(classDark);
      $theme_btn.firstElementChild.classList.replace("fa-sun", "fa-moon");
      ls.setItem("theme", "light");
    });
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
      if ($theme_btn.firstElementChild.classList.contains("fa-moon")) {
        darkMode_();
      } else {
        lightMode_();
      }
    }
  });

  //To save the value in LocalStorage

  d.addEventListener("DOMContentLoaded", (e) => {
    if (ls.getItem("theme") === null) ls.setItem("theme", "light");
    if (ls.getItem("theme") === "light") lightMode_();
    if (ls.getItem("theme") === "dark") darkMode_();
  });
}
