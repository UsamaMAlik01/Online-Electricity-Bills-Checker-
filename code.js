// Mobile menu functionality
const menuIcon = document.getElementById('menuIcon');
const navLinks = document.getElementById('navLinks');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuIcon.querySelector('i').classList.toggle('fa-bars');
    menuIcon.querySelector('i').classList.toggle('fa-times');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !menuIcon.contains(e.target) && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        menuIcon.querySelector('i').classList.add('fa-bars');
        menuIcon.querySelector('i').classList.remove('fa-times');
    }
});

// Reset scroll position when page loads
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

window.onload = function() {
    window.scrollTo(0, 0);
};

// Add the smooth scroll functionality
document.querySelector('a[href="#top"]').addEventListener('click', function(e) {
    e.preventDefault();
    
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});