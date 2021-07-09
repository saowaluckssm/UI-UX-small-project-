const nav = document.getElementById("nav");
const btn = document.getElementById("btn");


btn.addEventListener("click", () => {
  nav.classList.add("active");
})

nav.addEventListener("click", () => {
  nav.classList.remove("active");
})