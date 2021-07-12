const btn = document.getElementById("btn");
const bgColor = []

addEventListener("click", () => {
  document.body.style.background = randomBg();

})

const randomBg = () => {
  return `hsl(${Math.floor(Math.random() * 360)}, 100%, 90%)`;
}