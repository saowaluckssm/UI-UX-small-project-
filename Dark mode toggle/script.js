const toggle = document.getElementById("toggle");
const toggleLabel = document.getElementById("toggle-label");

toggleLabel.innerHTML = `<i class="fas fa-moon"></i>`;

toggle.addEventListener("change", (e) => {
  

  document.body.classList.toggle("dark", e.target.checked);
  if (document.body.classList.contains("dark")) {
    toggleLabel.innerHTML = `<i class="fas fa-sun"></i>`;
  } else {
    toggleLabel.innerHTML = `<i class="fas fa-moon"></i>`;

  }

})