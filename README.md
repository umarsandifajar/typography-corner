# Typography Corner

Studio tipografi poster dan carousel. Satu halaman HTML, tanpa build.

## Upload ke GitHub (tanpa git)
1. Buat repository baru di github.com (contoh nama: `typography-corner`, Public).
2. Di halaman repo klik **Add file > Upload files**.
3. Ekstrak ZIP ini dulu, lalu seret **semua file di dalamnya** (index.html, manifest.webmanifest, sw.js, 3 file ikon, README.md) ke halaman upload. `index.html` harus berada di root repo, bukan di dalam folder.
4. Klik **Commit changes**.
5. Buka **Settings > Pages**. Di Build and deployment pilih **Deploy from a branch**, branch `main`, folder `/ (root)`, lalu Save.
6. Tunggu 1-2 menit. Alamatnya: `https://USERNAME.github.io/typography-corner/`

## Jadi aplikasi di iPhone
1. Buka alamat di atas lewat **Safari**.
2. Ketuk tombol **Bagikan**, lalu **Tambah ke Layar Utama**.
3. Ketuk **Tambah**. Ikon Typography muncul dan terbuka layar penuh seperti aplikasi.

Setelah dibuka sekali dengan internet, halaman tersimpan dan bisa dipakai offline (font dan library ikut disimpan saat pertama dimuat).

## Update
Setelah mengubah `index.html`, naikkan versi cache di `sw.js` (`tc-v1` jadi `tc-v2`) supaya perangkat mengambil versi baru.
