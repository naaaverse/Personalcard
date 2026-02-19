document.addEventListener('DOMContentLoaded', function() {
    const heroContent = document.querySelector('.hero-content');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    function checkVisibility() {
        // Periksa apakah heroContent terlihat
        if (isElementInViewport(heroContent)) {
            heroContent.classList.add('active');
        }

        // Periksa apakah portfolioItems terlihat
        portfolioItems.forEach(item => {
            if (isElementInViewport(item)) {
                item.classList.add('active'); // Tambahkan kelas active untuk efek mengambang juga
            }
        });
    }

    // Fungsi untuk memeriksa apakah elemen berada di dalam viewport
    function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    console.log("rect:", rect); // Menampilkan semua properti rect
    console.log("rect.top:", rect.top);
    console.log("rect.left:", rect.left);
    console.log("rect.bottom:", rect.bottom);
    console.log("rect.right:", rect.right);
    console.log("rect.width:", rect.width);
    console.log("rect.height:", rect.height);
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || window.visualViewport.height;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth || window.visualViewport.width;
    const isInViewport = (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= windowHeight &&
        rect.right <= windowWidth
    );
    return isInViewport;
}


    // Panggil checkVisibility saat halaman dimuat dan saat di-scroll
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
});
