const themeToggle = document.getElementById('themeToggle');

// Hacer que las tarjetas de proyectos se giren al hacer clic
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flip');
  });
});
const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");

  const icon = toggleBtn.querySelector("i");
  icon.classList.toggle("fa-moon");
  icon.classList.toggle("fa-sun");

  const mode = body.classList.contains("dark-mode") ? "dark" : "light";
  localStorage.setItem("theme", mode);
});

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    body.classList.remove("light-mode");
    toggleBtn.querySelector("i").classList.replace("fa-moon", "fa-sun");
  }
});
