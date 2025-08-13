// ===== Smooth Scroll Effect =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ===== Fade-in Animation on Scroll =====
const fadeElements = document.querySelectorAll('.fade-in');

function checkFadeIn() {
    const triggerBottom = window.innerHeight * 0.85;
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < triggerBottom) {
            el.classList.add('show');
        }
    });
}

window.addEventListener('scroll', checkFadeIn);
checkFadeIn();
