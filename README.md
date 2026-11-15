Integrasi Array dan Function dalam JavaScript

- Nama: Mudrawira Zhu
- Kelas: XI RPL 2
- NIS: 4430

1. Inventaris Laboratorium
Program ini untuk mengelola barang di laboratorium, seperti menampilkan, menambah, mencari, dan menghapus barang.

2. Pengolahan Nilai
Program ini untuk menampilkan nilai siswa, menghitung rata-rata, dan menghitung jumlah siswa yang tuntas dan belum tuntas.


Function yang Digunakan

01-inventaris-lab.js
- tampilkanBarang() untuk menampilkan daftar barang.
- tambahBarang() untuk menambah barang.
- cariBarang() untuk mencari barang.
- hapusBarang() untuk menghapus barang.

02-pengolahan-nilai.js
- tampilkanNilai() untuk menampilkan nilai siswa.
- hitungRataRata() untuk menghitung rata-rata nilai.
- hitungJumlahTuntas() untuk menghitung jumlah siswa yang tuntas.


Cara Menjalankan Program
Program dijalankan lewat Terminal VS Code menggunakan Node.js.

Program 1:
node src/01-inventaris-lab.js

Program 2:
node src/02-pengolahan-nilai.js


Hasil Pengujian

1. Inventaris Laboratorium
Webcam dan Printer berhasil ditambahkan. Monitor berhasil ditemukan dan Mouse berhasil dihapus. Penambahan barang duplikat dan nama kosong ditolak. Scanner tidak ditemukan dan tidak bisa dihapus. Saat daftar kosong, program menampilkan pesan "Daftar barang kosong".

2. Pengolahan Nilai
Data pengujian: [60, 65, 70, 80, 90]

- Jumlah siswa: 5
- Rata-rata nilai: 73
- Siswa tuntas: 2
- Siswa belum tuntas: 3