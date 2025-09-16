// Function to load HTML templates
function loadTemplate(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;

      // Highlight active nav link after header loads
      if (id === "header") {
        const links = document.querySelectorAll(".nav-links a");
        links.forEach(link => {
          if (link.href === window.location.href) {
            link.classList.add("active");
          }
        });
      }
    })
    .catch(err => console.error("Error loading template:", err));
}

// Load header and footer dynamically
document.addEventListener("DOMContentLoaded", () => {
  loadTemplate("header", "templates/header.html");
  loadTemplate("footer", "templates/footer.html");
});

// Example function
function sayHello() {
  alert("Hello! Thanks for visiting my website 😊");
}