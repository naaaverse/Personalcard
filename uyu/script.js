// === NAVBAR SCROLL EFFECT ===
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// === FUNGSI TOMBOL EKSPLOR ===
const exploreBtn = document.getElementById('explore-btn');
const anggotaSection = document.getElementById('anggota');

exploreBtn.addEventListener('click', () => {
    anggotaSection.scrollIntoView({
        behavior: 'smooth' // Scroll dengan animasi halus
    });
});    

// === MENU TOGGLE UNTUK HP ===
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.navbar .menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// === DATA ANGGOTA KELAS ===
const anggotaData = [
    {
        nama: "Adrian Maulana",
        jabatan: "Kang live",
        foto: "./po/adrian.png",
        deskripsi: "Setelah ku pikir pikir sekolah tidak begitu buruk"
    },
    {
        nama: "Ahadin Abdul Hadi",
        jabatan: "Kang Pelor",
        foto: "./po/hadun.png",
        deskripsi: "Tapi mamah nyangu?"
    },
    {
        nama: "AL Inayah",
        jabatan: "Ukhihihi",
        foto: "./po/nayah.png",
        deskripsi: "Dari gak cantiknya aku,kerjaan,minesnya,dan latar belakangku. Semoga orang2 menerima itu"
    },
    {
        nama: "Ari Satria Wibowo",
        jabatan: "Hejo Cokor",
        foto: "./po/ari.png",
        deskripsi: "Jangan berkembang biak sebelum berkembang baik!"
    },
    {
        nama: "Bunga Carliana Frestania",
        jabatan: "Kang side eye",
        foto: "./po/bung.png",
        deskripsi: "Jangan biarkan rasa malas dan takutmu itu menghalangi prosesmu."
    },
     {
        nama: "Dea Amelia",
        jabatan: "Duta Osis",
        foto: "./po/dea.png",
        deskripsi: "Orang lain bilang aku mengemaskan ><"
    },
     {
        nama: "Eli Fitria",
        jabatan: "Upin",
        foto: "./po/eli.png",
        deskripsi: "Aku tahu ini susah,let's see who the winner"
    },
     {
        nama: "Fadli Candradinata",
        jabatan: "Kang Manuk",
        foto: "./po/fodol.png",
        deskripsi: "Yang semangat yang semangat,kamu we sendiri"
    },
     {
        nama: "Hasanudin",
        jabatan: "P bola",
        foto: "./po/udin.png",
        deskripsi: "Sehat Sehat ndakss"
    },
    {
        nama: "Hesti Maspupah",
        jabatan: "Kang drakor",
        foto: "./po/tot.png",
        deskripsi: "Soobin Soobin u know:3"
    },
     {
        nama: "Holis Muhaemin",
        jabatan: "Kang Gosip",
        foto: "./po/lis.png",
        deskripsi: "Matimahmaot"
    },
     {
        nama: "Melani",
        jabatan: "Ipin",
        foto: "./po/melani.png",
        deskripsi: "for my future I hope everything gonna be oteyy"
    },
     {
        nama: "Muhammad isan",
        jabatan: "bolang",
        foto: "./po/ihsan.png",
        deskripsi: "Hidup Jokowii✊🧑"
    },
     {
        nama: "Nindi Fitriani Dewi",
        jabatan: "Kang buah",
        foto: "./po/nini.png",
        deskripsi: "I hate working "
    },
     {
        nama: "Nur Afifah Yahya",
        jabatan: "Kang Riweh",
        foto: "./po/nuy.jpg",
        deskripsi: "I wanna try everything ,fighting girl ^_^"
    },
     {
        nama: "Puji Paojiah",
        jabatan: "Kang Basreng",
        foto: "./po/pao.png",
        deskripsi: "Mikir kids2"
    },
     {
        nama: "Siti Rahmawati",
        jabatan: "Adi",
        foto: "./po/tut.png",
        deskripsi: "Saya harap dengan berharap harap kepada kalian untuk....."
    },
     {
        nama: "Siti Salwa Khairunnisa",
        jabatan: "Lancah",
        foto: "./po/wa.png",
        deskripsi: "Bahagia bersama dengan satu orang selamanya,sukses jaya"
    },
     {
        nama: "Umar Kusumah",
        jabatan: "Lokmol",
        foto: "./po/mer.png",
        deskripsi: "Saya hanya anak muda yang tak berbakat yang berharap sukses lewat nekat"
    },
     {
        nama: "Violi Rahmawati",
        jabatan: "Kang Jajan",
        foto: "./po/botak.png",
        deskripsi: "Cilor mau cilor??"
    }
];

// === RENDER DATA ANGGOTA ===
const anggotaContainer = document.getElementById('anggota-container');

anggotaData.forEach(anggota => {
    const card = document.createElement('div');
    card.classList.add('anggota-card');
    card.setAttribute('data-role', anggota.jabatan);
    
    card.innerHTML = `
        <div class="anggota-foto">
            <img src="${anggota.foto}" alt="${anggota.nama}">
        </div>
        <div class="anggota-info">
            <h3>${anggota.nama}</h3>
            <p class="jabatan">${anggota.jabatan}</p>
            <p>${anggota.deskripsi}</p>
        </div>
    `;
    
    anggotaContainer.appendChild(card);
});

// === SLIDER MOMEN ===
const sliderItems = document.querySelectorAll('.slider-item');
let currentSlide = 0;

// Set semua slide jadi tidak tampil dulu
sliderItems.forEach(item => {
    item.style.display = 'none';
    item.style.width = '100%';
    item.style.height = '100%';
});

// Tampilkan slide pertama
function showSlide(index) {
    sliderItems.forEach((item, i) => {
        item.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % sliderItems.length;
    showSlide(currentSlide);
}

// Jalankan slider
showSlide(currentSlide);
setInterval(nextSlide, 5000);

// === FORM BUKU TAMU ===
const tamuForm = document.getElementById('tamu-form');
const pesanContainer = document.getElementById('pesan-container');

// Fungsi muat pesan
function muatPesan() {
  let semuaPesan = JSON.parse(localStorage.getItem('bukuTamuPesan')) || [];
  pesanContainer.innerHTML = ''; // Kosongkan kontainer dulu agar tidak duplikat
  semuaPesan.forEach((data, index) => { // Tambahkan parameter index
    const pesanItem = document.createElement('div');
    pesanItem.classList.add('pesan-item');
    pesanItem.innerHTML = `
      <h4>${data.nama}</h4>
      <p>${data.pesan}</p>
      <div class="tanggal">Dikirim pada ${data.tanggal}</div>
      <button class="btn-hapus" data-index="${index}">
        <i class="fas fa-trash-alt"></i> <!-- Icon tong sampah dari Font Awesome -->
        <!-- Atau pakai simbol: 🗑️ Hapus -->
      </button>
    `;
    pesanContainer.appendChild(pesanItem);
  });

  // Tambahkan event listener untuk semua tombol hapus
  tambahEventHapus();
}

// Fungsi untuk event hapus
function tambahEventHapus() {
  const btnHapus = document.querySelectorAll('.btn-hapus');
  btnHapus.forEach(btn => {
    btn.addEventListener('click', function() {
      const index = this.getAttribute('data-index');
      let semuaPesan = JSON.parse(localStorage.getItem('bukuTamuPesan')) || [];
      semuaPesan.splice(index, 1); // Hapus data sesuai index
      localStorage.setItem('bukuTamuPesan', JSON.stringify(semuaPesan)); // Simpan perubahan
      muatPesan(); // Refresh tampilan pesan
    });
  });
}

// Panggil saat halaman dimuat
document.addEventListener('DOMContentLoaded', muatPesan);

// Event submit form
tamuForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const nama = document.getElementById('nama').value;
  const pesan = document.getElementById('pesan').value;
  const tanggal = new Date().toLocaleDateString('id-ID');

  const pesanData = { nama, pesan, tanggal };
  let semuaPesan = JSON.parse(localStorage.getItem('bukuTamuPesan')) || [];
  semuaPesan.push(pesanData);
  localStorage.setItem('bukuTamuPesan', JSON.stringify(semuaPesan));

  tamuForm.reset();
  muatPesan(); // Refresh tampilan setelah kirim
});

// === MODAL FOTO GALERI ===
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const galeriItems = document.querySelectorAll('.galeri-item');
const closeModal = document.querySelector('.close-modal');

galeriItems.forEach(item => {
    item.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = item.querySelector('img').src;
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
