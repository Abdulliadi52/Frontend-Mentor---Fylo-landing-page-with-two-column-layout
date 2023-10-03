const buttons = document.getElementById("btn");
const navBar = document.getElementById("navbars");

buttons.addEventListener("click", () => {
  buttons.classList.toggle("active");
  navBar.classList.toggle("active");
});
