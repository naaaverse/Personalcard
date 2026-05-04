const particlesContainer = document.getElementById('particles');
for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 3}s`;
    particlesContainer.appendChild(particle);
}

// --- BAGIAN ANIMASI SCROLL ---
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
            rect.top <= windowHeight * 0.8 &&
            rect.left >= 0 &&
            rect.bottom >= 0 &&
            rect.right <= windowWidth
        );
    }

    checkVisibility();
    window.addEventListener('scroll', checkVisibility);


    // --- BAGIAN KLIK GAMBAR JADI BESAR ---
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var span = document.getElementsByClassName("close")[0];

    // Ambil semua gambar
    const images = document.querySelectorAll('.portfolio-item img');

    images.forEach(img => {
        img.onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src; // Masukin gambar yang diklik
        }
    });

    // Klik tombol X buat nutup
    span.onclick = function() { 
        modal.style.display = "none";
    }

    // Klik luar gambar juga bisa nutup
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});