// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;

themeToggle.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme");
  if (currentTheme === "dark") {
    html.setAttribute("data-theme", "light");
    themeToggle.textContent = "🌙";
  } else {
    html.setAttribute("data-theme", "dark");
    themeToggle.textContent = "☀️";
  }
});

// Reveal Animations
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.2 });

reveals.forEach(reveal => observer.observe(reveal));

// Contact Form
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  formMessage.textContent = "Message sent successfully!";
  formMessage.style.color = "green";
  form.reset();
});

