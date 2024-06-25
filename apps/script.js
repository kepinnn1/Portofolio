const mobileMenu = document.querySelector('#mobile-menu');
const navMenu = document.querySelector('.navbar-menu');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
