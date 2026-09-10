# TAS — Website Company Profile PT. Transport Anugerah Sakti

Frontend website company profile PT. Transport Anugerah Sakti.
Dibangun dengan **Vue 3** (Vite) + **Tailwind CSS 4** + **Pinia** + **Vue Router**.

## Menjalankan (development)

1. `npm install`
2. (Opsional) salin `.env.example` → `.env.local` dan sesuaikan `VITE_API_BASE` bila backend berjalan di alamat lain.
3. `npm run dev`

Fitur autentikasi (Login, Register, Profile, Admin) memerlukan backend Laravel
(`TAS_Backend`) berjalan di `http://localhost:8000` — jalankan `php artisan serve` pada repo backend.

## Build produksi

```sh
npm run build
```

Hasil build ada di `dist/` (Vercel mendeteksi otomatis sebagai proyek Vite).

## Struktur

- `src/views/` — halaman publik (Home, Services, About, Contact) dan halaman autentikasi (Login, Register, Profile, Admin)
- `src/components/` — Navbar & Footer
- `src/api/` — klien REST API
- `src/stores/` — state management (Pinia)
- `public/` — aset statis (favicon, robots.txt, sitemap.xml)
