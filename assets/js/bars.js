document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    let b1 = document.querySelector(".skill__progressbar--p1");
    let b2 = document.querySelector(".skill__progressbar--p2");
    let b3 = document.querySelector(".skill__progressbar--p3");
    let b4 = document.querySelector(".skill__progressbar--p4");
    let b5 = document.querySelector(".skill__progressbar--p5");
    let b6 = document.querySelector(".skill__progressbar--p6");
    let b7 = document.querySelector(".skill__progressbar--p7");

    let bars = [b1, b2, b3, b4, b5, b6, b7];

    bars.forEach((b) => {
      if ((b.style.transform = "scale(0)")) b.style.transform = "scale(1)";
    });
  }, 300);
});
