document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Ambil data dari input formulir
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Tampilkan pesan konfirmasi di bawah formulir
    document.getElementById("confirmationMessage").innerHTML = 
        `Terima kasih, ${name}! Pesan Anda telah berhasil dikirim.`;

    // Kosongkan kolom input setelah pengiriman
    document.getElementById("contactForm").reset();
});
