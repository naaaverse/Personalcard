document.addEventListener('DOMContentLoaded', function() {
    // --- BAGIAN ANIMASI SAAT DI-SCROLL ---
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


    // --- BAGIAN KLIK TOMBOL "CLICK" UNTUK MUNCULIN GAMBAR ---
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var span = document.getElementsByClassName("close")[0];

    // Ambil semua tombol
    const buttons = document.querySelectorAll('.show-image');

    buttons.forEach(button => {
        button.onclick = function(){
            // CARI GAMBAR YANG ADA DI ATAS TOMBOL INI
            let gambar = this.parentElement.querySelector('img');
            modal.style.display = "block";
            modalImg.src = gambar.src; // Ambil sumber gambarnya
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