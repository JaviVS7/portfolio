document.addEventListener("DOMContentLoaded", (event) => {
  let button = document.querySelector(".layout__menu-toggle");
  let icon_bars = document.querySelector(".layout__menu-toggle .fa-bars");
  let icon_xmark = document.querySelector(".layout__menu-toggle .fa-xmark");
  let aside = document.querySelector(".layout__aside");

  button.addEventListener("click", (event) => {
    let visible = document.querySelector(".layout__aside--visible");

    if (!visible) {
      aside.classList.add("layout__aside--visible");
      button.style.background = "var(--second-color)";
      icon_bars.style.display = "none";
      icon_xmark.style.display = "inline-block";
    } else {
      aside.classList.remove("layout__aside--visible");
      button.style.background = "var(--main-color)";
      icon_bars.style.display = "inline-block";
      icon_xmark.style.display = "none";
    }
  });
});
