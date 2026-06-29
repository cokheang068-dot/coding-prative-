const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

const applyTheme = (theme) => {
  const isDark = theme === "dark";
  body.classList.toggle("dark", isDark);

  if (themeToggle) {
    themeToggle.innerHTML = isDark ? "☀️ Light" : "🌙 Dark";
    themeToggle.setAttribute("aria-pressed", String(isDark));
  }
};

const savedTheme = localStorage.getItem("theme");
const preferredTheme = savedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
applyTheme(preferredTheme);

themeToggle?.addEventListener("click", () => {
  const nextTheme = body.classList.contains("dark") ? "light" : "dark";
  localStorage.setItem("theme", nextTheme);
  applyTheme(nextTheme);
});
