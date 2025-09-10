const toggleButton = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle navigation menu for mobile
toggleButton.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Add active class to the link when clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Remove 'active' class from all links
    navLinks.forEach(link => link.classList.remove('active'));
    // Add 'active' class to the clicked link
    link.classList.add('active');
  });
});

// Highlight the link based on scroll position
window.addEventListener('scroll', () => {
  let currentSection = "";

  document.querySelectorAll("section").forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute("id");
    }
  });

  // Update active link based on scroll position
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute("href").includes(currentSection)) {
      link.classList.add('active');
    }
  });
});