document.addEventListener("DOMContentLoaded", function () {
  // Load Header
  fetch("ui/header.html")
    .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.text();
    })
    .then((data) => {
      const placeholder = document.getElementById("header-placeholder");
      if (placeholder) {
          placeholder.innerHTML = data;
          
          // Apply extra classes if defined on the placeholder
          const extraClass = placeholder.getAttribute('data-header-class');
          if (extraClass) {
              const header = placeholder.querySelector('header');
              if (header) {
                  header.classList.add(...extraClass.split(' '));
              }
          }

          // After header is loaded, load Main Menu
          loadMainMenu();
      }
    })
    .catch((error) => console.error("Error loading header:", error));

  // Load Footer
  fetch("ui/footer.html")
    .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.text();
    })
    .then((data) => {
      const placeholder = document.getElementById("footer-placeholder");
      if (placeholder) {
          placeholder.innerHTML = data;
      }
    })
    .catch((error) => console.error("Error loading footer:", error));
});

function loadMainMenu() {
  fetch("ui/mainmenu.html")
    .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.text();
    })
    .then((data) => {
      const menuPlaceholder = document.getElementById("main-menu-placeholder");
      if (menuPlaceholder) {
        // Replace the placeholder div with the actual content (ul)
        menuPlaceholder.outerHTML = data;
        
        // Set active link based on current page
        setActiveLink();
      }
    })
    .catch((error) => console.error("Error loading main menu:", error));
}

function setActiveLink() {
    const currentPath = window.location.pathname;
    const page = currentPath.split("/").pop() || 'index.html'; // Default to index.html if empty path
    
    // Select all links in the header (both main header and submenu)
    const links = document.querySelectorAll('.header-link, .dropdown-menu a');
    
    links.forEach(link => {
        const href = link.getAttribute('href');
        // Simple check: if href matches the page name
        if (href === page) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'true');
        } else {
             // Don't remove active class if it's not the one we are setting (to avoid conflict if logic is complex), 
             // but here we want to ensure only current page is active.
             // However, header.html might come with 'Home' active by default.
             link.classList.remove('active');
             link.removeAttribute('aria-current');
        }
    });
}
