const nilaiPraktik = [80, 70, 90, 65, 75, 85];
const batasTuntas = 75;

function tampilkanNilai(daftarNilai) {
    console.log("=== NILAI PRAKTIK SISWA ===");

    for (let i = 0; i < daftarNilai.length; i++) {
        console.log(`Siswa ${i + 1}: ${daftarNilai[i]}`);
    }
}

function hitungRataRata(daftarNilai) {
    if (daftarNilai.length === 0) {
        return 0;
    }

    let total = 0;

    for (let i = 0; i < daftarNilai.length; i++) {
        total += daftarNilai[i];
    }

    const rataRata = total / daftarNilai.length;

    return rataRata;
}

function hitungJumlahTuntas(daftarNilai, batas) {
    let jumlahTuntas = 0;

    for (let i = 0; i < daftarNilai.length; i++) {
        if (daftarNilai[i] >= batas) {
            jumlahTuntas++;
        }
    }

    return jumlahTuntas;
}

tampilkanNilai(nilaiPraktik);

const jumlahSiswa = nilaiPraktik.length;
const rataRata = hitungRataRata(nilaiPraktik);
const jumlahTuntas = hitungJumlahTuntas(nilaiPraktik, batasTuntas);
const jumlahBelumTuntas = jumlahSiswa - jumlahTuntas;

console.log("\n=== REKAPITULASI ===");
console.log(`Jumlah Siswa: ${jumlahSiswa}`);
console.log(`Nilai Rata-rata: ${rataRata}`);
console.log(`Jumlah Tuntas: ${jumlahTuntas}`);
console.log(`Jumlah Belum Tuntas: ${jumlahBelumTuntas}`);