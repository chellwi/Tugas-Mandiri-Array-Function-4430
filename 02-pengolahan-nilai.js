
const nilaiPraktik = [80, 70, 90, 65, 75, 85];
const batasTuntas = 75;

function tampilkanNilai(nilai) {
    for (let i = 0; i < nilai.length; i++) {
        console.log("Siswa " + (i + 1) + ": " + nilai[i]);
    }
}

function hitungRataRata(nilai) {
    if (nilai.length === 0) {
        return 0;
    }

    let total = 0;

    for (let i = 0; i < nilai.length; i++) {
        total = total + nilai[i];
    }

    return total / nilai.length;
}

function hitungJumlahTuntas(nilai, batas) {
    let jumlah = 0;

    for (let i = 0; i < nilai.length; i++) {
        if (nilai[i] >= batas) {
            jumlah = jumlah + 1;
        }
    }

    return jumlah;
}

tampilkanNilai(nilaiPraktik);

let rataRata = hitungRataRata(nilaiPraktik);
let jumlahTuntas = hitungJumlahTuntas(nilaiPraktik, batasTuntas);
let jumlahBelumTuntas = nilaiPraktik.length - jumlahTuntas;

console.log("Jumlah siswa: " + nilaiPraktik.length);
console.log("Nilai rata-rata: " + rataRata);
console.log("Jumlah siswa tuntas: " + jumlahTuntas);
console.log("Jumlah siswa belum tuntas: " + jumlahBelumTuntas);

const nilaiUji = [60, 65, 70, 80, 90];

rataRata = hitungRataRata(nilaiUji);
jumlahTuntas = hitungJumlahTuntas(nilaiUji, batasTuntas);
jumlahBelumTuntas = nilaiUji.length - jumlahTuntas;

console.log("Jumlah siswa: " + nilaiUji.length);
console.log("Nilai rata-rata: " + rataRata);
console.log("Jumlah siswa tuntas: " + jumlahTuntas);
console.log("Jumlah siswa belum tuntas: " + jumlahBelumTuntas);
