// JavaScript untuk Website Profil
document.addEventListener('DOMContentLoaded', () => {
    // 1. Menampilkan tahun saat ini secara otomatis di footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Efek smooth scroll untuk link (jika ada navigasi internal nanti)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 3. Pesan sambutan di Console
    console.log('%c Halo! Selamat datang di profil Husnul Khotimah.', 'background: #222; color: #bada55; font-size: 14px; padding: 4px; border-radius: 4px;');
});
