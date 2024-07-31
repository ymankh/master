const container = document.getElementById("container");
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");

loginBtn.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

registerBtn.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});
