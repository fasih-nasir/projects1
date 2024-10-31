window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 300) {
      navbar.classList.add('fixed-top');
    } else {
      navbar.classList.remove('fixed-top');
    }
  });
  // loader
  window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');

    // Display loader, hide content initially
    loader.style.display = 'block ';
    content.style.display = 'none';

    // Hide the loader and show content after 3 seconds
    setTimeout(() => {
      loader.style.display = 'none';
      content.style.display = 'block';
    }, 300); // Adjust time as needed
  });