// Function to load HTML templates
function loadTemplate(id, file) {
  fetch(file) // Fetch the template file (e.g., header.html)
    .then(response => response.text()) // Convert response to plain text (HTML)
    .then(data => {
      document.getElementById(id).innerHTML = data; // Insert HTML into the element with that ID

      // Highlight active nav link after header loads
      if (id === "header") {
        const links = document.querySelectorAll(".nav-links a"); // Select all nav links
        links.forEach(link => {
          if (link.href === window.location.href) { // Compare each link’s URL with current page
            link.classList.add("active"); // Add "active" class to the matching link
          }
        });
      }
    })
    .catch(err => console.error("Error loading template:", err));
}

// Load header and footer dynamically
document.addEventListener("DOMContentLoaded", () => {
  loadTemplate("header", "templates/header.html"); // Insert header
  loadTemplate("footer", "templates/footer.html"); // Insert footer
});


