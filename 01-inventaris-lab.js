// Data awal inventaris laboratorium
const barangLab = [
    "Keyboard",
    "Mouse",
    "Monitor",
    "Kabel HDMI"
];

// Function untuk menampilkan daftar barang
function tampilkanBarang(daftarBarang) {
    console.log("=== DAFTAR INVENTARIS LABORATORIUM ===");

    if (daftarBarang.length === 0) {
        console.log("Daftar barang kosong");
    } else {
        for (let i = 0; i < daftarBarang.length; i++) {
            console.log(`${i + 1}. ${daftarBarang[i]}`);
        }
    }

    console.log(`Jumlah barang: ${daftarBarang.length}`);
}

// Memanggil function
tampilkanBarang(barangLab);