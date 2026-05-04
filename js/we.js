// --- BAGIAN BINTANG BERKELAP-KELIP ---
const starsContainer = document.getElementById('stars');
for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.width = `${Math.random() * 3}px`;
    star.style.height = star.style.width;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 2}s`;
    starsContainer.appendChild(star);
}

// --- BAGIAN ANIMASI SAAT DI-SCROLL ---
document.addEventListener('DOMContentLoaded', function() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    function checkVisibility() {
        portfolioItems.forEach(item => {
            if (isElementInViewport(item)) {
                item.classList.add('active');
            }
        });
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight || window.visualViewport.height;
        const windowWidth = window.innerWidth || document.documentElement.clientWidth || window.visualViewport.width;
        
        return (
            rect.top <= windowHeight * 0.8 && // Muncul saat 80% layar
            rect.left >= 0 &&
            rect.bottom >= 0 &&
            rect.right <= windowWidth
        );
    }

    // Jalankan saat load dan scroll
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
});