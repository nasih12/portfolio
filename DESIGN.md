# DESIGN — "Lembar Gambar Teknik"

Design direction untuk nasih12/portfolio. Oil-ui arah E (round1), disetujui owner22 Okt2026.
Dokumen ini = sumber keputusan visual; kalau ada konflik dengan opini model, yang berlaku
di sini.

## Konteks & posisi

- Pemilik: Abdullah Nasih Ulwan (nasih12), fullstack developer4+ tahun di perbankan
  (.NET/Flutter, BNI) & asuransi (React/.NET, Mandiri Inhealth) + pembangun produk sendiri.
- Audiens: rekruter/klien (enterprise) dan sesama dev Indonesia; sebagian besar buka dari HP.
- Bahasa situs: **Indonesia casual** (keputusan owner, P0).
- Rasanya yang harus terasa: presisi, jujur, berwibawa, sedikit dingin tapi tidak dingin;
  seperti lembar gambar teknik yang ditulis orang yang rapi. Bukan "situs developer"
  generik, bukan kartu nama korporat.

## Palet (2 inti +1 aksen — R-29)

| Token | Hex | Peran |
|---|---|---|
| `--paper` | `#FAF8F2` | kertas gading, alas semua halaman |
| `--paper-2` | `#F3EFE4` | panel/rata bidang beda tipis |
| `--graphite` | `#2B2B2B` | teks utama, garis, bingkai (tinta grafit) |
| `--graphite-2` | `#5C5A52` | teks sekunder |
| `--fade` | `#8B8778` | label teknis kecil (kontras AA di kertas4.6:1) |
| `--rule` | `#D8D3C4` | garis pemisah tipis |
| `--red` | `#C8452F` | **aksen tunggal**: garis dimensi, tag [LIVE], penekanan |

Alasan (R-21/R-31): terang BUKAN default "karena dark kelihatan tech" — lembar gambar
teknik memang kertas. Dark mode TIDAK ditawarkan (R-34: toggle = gak ada; kertas = identitas).

## Tipografi (R-06)

| Peran | Font | Alasan |
|---|---|---|
| Teks UI & body | **Inter** | grotesk presisi, netral, terbaik utk hierarki data |
| Data teknis (tahun, URL, tag, angka) | **JetBrains Mono** tabular | cara kerja engineer spec-driven; mono = fungsional, BUKAN hiasan |
| Nama & sentuhan editorial | **Instrument Serif** | satu-satunya serif, biar halaman gak kaku total |

Skala: display nama clamp(34px,9vw,64px); h220-24px; body14-16px; label mono10-11px
letter-spacing .14-.2em uppercase.

## Motif identitas (keharusan, R-31)

1. **Bingkai lembar ganda** — seluruh halaman dibungkus garis grafit dobel (tebal + hairline
   inset5px) ala margin gambar teknik.
2. **Garis dimensi** — `.dim-line`: garis bertitik ujung (tick) yang menandai rentang
   masa kerja & memisahkan bagian; dipakai sebagai pemisah utama antar section.
3. **Title block** — tabel kecil sudut kanan-bawah footer (DIGAMBAR / MATERIAL / LEMBAR /
   REV) — tanda tangan halaman.
4. **Anotasi merah `[LIVE]`** — tag mono untuk status produk (fungsional, bukan badge
   dekoratif; hanya untuk yang benar-benar live).

## Dials kegairahan (wajib eksplisit)

- **ENERGY:2** (seimbang) — tenang tapi gak kaku; hierarki kuat lewat ukuran & garis.
- **RHYTHM:3** (asimetris) — hero lebar penuh, rekam jejak pakai garis dimensi berselang,
  karya = grid2 kolom beda lebar di mobile (featured lebih besar), kontak = blok rata kiri
  dengan kolom kosong. SEMUA section beda komposisi.
- **MOTION:2** (reveal sekali) — `.reveal` masuk viewport sekali (opacity+translate14px),
  tanpa loop; hormati `prefers-reduced-motion`.

## Batasan keras (dari antislop, relevan ke proyek ini)

- Tanpa em dash di teks UI (R-02) → pakai tandahubung biasa atau titik koma.
- Tanpa statistik tanpa sumber (R-17): hanya angka dari CV/produk nyata:
  `4+ tahun`, `2 lembaga` (BNI, Mandiri Inhealth), `6 produk live` (dihitung dari daftar LIVE).
- Tanpa testimoni/FAQ generik/tombol mati (R-18/R-24/R-26) → anchor nav hanya ke section
  yang ada; "Unduh CV" nyambung ke file PDF asli di `/cv.pdf`.
- Radius max3px (R-11), bayangan hanya untuk elemen terangkat (R-12): kartu karya
  `box-shadow` tipis; sisanya rata.
- Elemen interaktif: semua link punya tujuan nyata; state hover = garis/underline merah
  tumbuh (fungsional menandai klikable).
