const barangLab = [
    "Keyboard",
    "Mouse",
    "Monitor",
    "Kabel HDMI"
];

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

function tambahBarang(daftarBarang, namaBarang) {
    if (namaBarang.trim() === "") {
        return false;
    }

    if (daftarBarang.includes(namaBarang)) {
        return false;
    }

    daftarBarang.push(namaBarang);

    return true;
}
// Menampilkan daftar barang awal
console.log("=== DAFTAR BARANG AWAL ===");
tampilkanBarang(barangLab);

// Menambahkan Webcam
console.log("\n=== MENAMBAHKAN WEBCAM ===");

if (tambahBarang(barangLab, "Webcam")) {
    console.log("Webcam berhasil ditambahkan.");
} else {
    console.log("Penambahan barang ditolak.");
}

// Mencari Monitor
console.log("\n=== MENCARI MONITOR ===");

const posisiMonitor = cariBarang(barangLab, "Monitor");

if (posisiMonitor !== -1) {
    console.log(`Monitor ditemukan pada indeks ${posisiMonitor}.`);
} else {
    console.log("Monitor tidak ditemukan.");
}

// Menghapus Mouse
console.log("\n=== MENGHAPUS MOUSE ===");

if (hapusBarang(barangLab, "Mouse")) {
    console.log("Mouse berhasil dihapus.");
} else {
    console.log("Mouse tidak ditemukan.");
}

// Menampilkan daftar setelah perubahan
console.log("\n=== DAFTAR SETELAH PERUBAHAN ===");
tampilkanBarang(barangLab);

function cariBarang(daftarBarang, namaBarang) {
    const indeks = daftarBarang.indexOf(namaBarang);

    return indeks;
}

function hapusBarang(daftarBarang, namaBarang) {
    const indeks = cariBarang(daftarBarang, namaBarang);

    if (indeks === -1) {
        return false;
    }

    daftarBarang.splice(indeks, 1);

    return true;
}

// === PENGUJIAN TAMBAHAN ===
console.log("\n=== PENGUJIAN TAMBAHAN ===");

// 1. Menguji penambahan Printer
const ujiPrinter = ["Keyboard", "Mouse"];
console.log("Tambah Printer:", tambahBarang(ujiPrinter, "Printer"));
tampilkanBarang(ujiPrinter);

// 2. Menguji penambahan barang duplikat
console.log("Tambah Monitor duplikat:", tambahBarang(ujiPrinter, "Keyboard"));

// 3. Menguji nama barang kosong
console.log("Tambah nama kosong:", tambahBarang(ujiPrinter, ""));

// 4. Menguji pencarian barang yang tidak ada
console.log("Cari Scanner:", cariBarang(ujiPrinter, "Scanner"));

// 5. Menguji penghapusan barang yang tidak ada
console.log("Hapus Scanner:", hapusBarang(ujiPrinter, "Scanner"));
tampilkanBarang(ujiPrinter);

// 6. Menguji daftar kosong
console.log("\n=== MENGUJI DAFTAR KOSONG ===");
tampilkanBarang([]);