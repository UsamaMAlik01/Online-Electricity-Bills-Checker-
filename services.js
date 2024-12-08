// Reset scroll position when page loads
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

window.onload = function() {
    window.scrollTo(0, 0);
};

// Add smooth scroll functionality
document.querySelectorAll('.scroll-top').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menuIcon');
    const navLinks = document.getElementById('navLinks');

    menuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        if (navLinks.classList.contains('active')) {
            menuIcon.querySelector('i').classList.remove('fa-bars');
            menuIcon.querySelector('i').classList.add('fa-times');
        } else {
            menuIcon.querySelector('i').classList.add('fa-bars');
            menuIcon.querySelector('i').classList.remove('fa-times');
        }
    });
});