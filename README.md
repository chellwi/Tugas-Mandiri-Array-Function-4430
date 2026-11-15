TUGAS MANDIRI

Integrasi Array dan Function JavaScript

Identitas Siswa

- Nama: Mudrawira Zhu
- Kelas: XI RPL 2
- NIS: 4430

Deskripsi Program

1. Inventaris Laboratorium

Program untuk mengelola daftar inventaris barang laboratorium menggunakan Array dan Function. Fitur program meliputi menampilkan, menambahkan, mencari, dan menghapus barang.

2. Pengolahan Nilai Praktik Siswa

Program untuk mengolah nilai praktik siswa, menghitung nilai rata-rata, menghitung jumlah siswa tuntas, dan menghitung jumlah siswa belum tuntas.

Daftar Function dan Kegunaannya

Program 1 — Inventaris Laboratorium

Function| Kegunaan
"tampilkanBarang()"| Menampilkan daftar barang dan jumlahnya.
"tambahBarang()"| Menambahkan barang serta mencegah data kosong dan duplikat.
"cariBarang()"| Mencari barang menggunakan "indexOf()".
"hapusBarang()"| Menghapus barang menggunakan "splice()".

Program 2 — Pengolahan Nilai Praktik Siswa

Function| Kegunaan
"tampilkanNilai()"| Menampilkan nilai setiap siswa.
"hitungRataRata()"| Menghitung nilai rata-rata menggunakan "return".
"hitungJumlahTuntas()"| Menghitung jumlah siswa yang mencapai batas ketuntasan.

Cara Menjalankan Program

Program dijalankan menggunakan Node.js melalui Terminal Visual Studio Code.

Program pertama:

node 01-inventaris-lab.js

Program kedua:

node 02-pengolahan-nilai.js

Hasil Pengujian Program

1. Inventaris Laboratorium

- Penambahan barang berhasil.
- Barang duplikat ditolak.
- Nama barang kosong ditolak.
- Barang tidak ditemukan menghasilkan indeks "-1".
- Penghapusan barang yang tidak tersedia menghasilkan "false".
- Daftar kosong berhasil ditampilkan.

2. Pengolahan Nilai Praktik Siswa

Pengujian pertama:
"[80, 70, 90, 65, 75, 85]"

- Jumlah siswa: 6
- Nilai rata-rata: 77.5
- Jumlah tuntas: 4
- Jumlah belum tuntas: 2

Pengujian kedua:
"[60, 65, 70, 80, 90]"

- Jumlah siswa: 5
- Nilai rata-rata: 73
- Jumlah tuntas: 2
- Jumlah belum tuntas: 3

Teknologi yang Digunakan

- JavaScript
- Node.js
- Visual Studio Code
- Git dan GitHub