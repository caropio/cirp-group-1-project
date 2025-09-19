// JavaScript files (.js) handle the dynamic/interactive parts 
// of a website. They allow HTML and CSS (which are static) to 
// respond to user actions, load content automatically, and 
// make the site feel more "alive". For example here, We dynamically 
// load the header.html and footer.html into 
// every page. This way, if you change the header or footer 
// once, it updates everywhere automatically (no need to 
// copy-paste the same code on multiple pages).
// We also highlight the active navigation link based on 
// which page the user is currently on.



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


