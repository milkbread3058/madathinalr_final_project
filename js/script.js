// Navigation
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('.nav-menu');
    const content = document.querySelector('.content');

    menuIcon.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuIcon.textContent = navMenu.classList.contains('active') ? '✖' : '☰';
        content.style.marginTop = navMenu.classList.contains('active') ? '150px' : '0'; 
    });
});

// Form
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('formMessage').style.display = 'block';
});