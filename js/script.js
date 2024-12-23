//toggle
const navbaPoint = document.querySelector(".navbar-point");
document.querySelector("#hamburger").onclick = () => {
  navbaPoint.classList.toggle("active");
};

//klik diluar
const hamburger = document.querySelector("#hamburger");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbaPoint.contains(e.target)) {
    navbaPoint.classList.remove("active");
  }
});
