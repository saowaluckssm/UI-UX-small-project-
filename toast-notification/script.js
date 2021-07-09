const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click", () => {
  createNotification();
});

const createNotification = () => {
  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.innerText = "Go Feed The Cat";

  container.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 2000);
};
