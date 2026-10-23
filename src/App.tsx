import { useEffect } from 'react'
import { ArrowUpRight, Mail } from 'lucide-react'

/* Reveal sekali saat masuk viewport (MOTION dial2) */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
}

const NAV = [
  { href: '#rekam-jejak', label: 'Rekam Jejak' },
  { href: '#karya', label: 'Karya' },
  { href: '#peralatan', label: 'Peralatan' },
  { href: '#kontak', label: 'Kontak' },
]

const EXPERIENCE = [
  {
    from: '2022',
    to: '2025',
    span: '3 TAHUN',
    company: 'PT. Indocyber Global Teknologi',
    client: 'Klien: PT. Bank Negara Indonesia (BNI)',
    role: '.NET & Flutter Developer · Mei 2022 - Agu 2025',
    items: [
      'Backend ASP.NET & C# untuk Scoring Loan Origination: Digital Loan Fleksi, LMS Retail, WebChannel, eLO Bridging.',
      'Aplikasi mobile Flutter lintas platform: BNI Move (geotagging Google Maps, push notification Firebase), BeSmartKu (Play Store), RodaBundar.',
      'Layanan API throughput tinggi untuk Mobile Banking, integrasi middleware antara sistem pihak ketiga dan sistem pinjaman internal.',
      'Dukungan UAT dan analisis kebutuhan bersama business analyst serta tim QA.',
    ],
  },
  {
    from: '2025',
    to: 'KINI',
    span: 'BERJALAN',
    company: 'PT. Digital Tech Asia',
    client: 'Klien: PT. Mandiri Inhealth',
    role: 'Fullstack Developer · Agu 2025 - sekarang',
    items: [
      'Web aplikasi dan layanan API dengan React.js serta ASP.NET Core: New Markis, New Aktuw, Extend Polis.',
      'Perhitungan dan pelaporan asuransi IFRS17: Coinsuirance dan Reinsurance, untuk produk kesehatan dan non-kesehatan.',
      'Arsitektur API scalable, skema basis data, dan stored procedure untuk lalu lintas request volume besar.',
      'Pelaporan otomatis dan dukungan operasional bersama unit bisnis.',
    ],
  },
]

const PRODUCTS = [
  {
    name: 'Expense + Bot WhatsApp',
    url: 'expense.nasihulwan.com',
    href: 'https://expense.nasihulwan.com',
    shot: '/shots/expense.jpg',
    desc: 'Pencatat pengeluaran multi-user dengan audit finansial otomatis, dioperasikan lewat chat WhatsApp.',
    stack: 'Go · whatsmeow · Postgres',
    featured: true,
  },
  {
    name: 'Stock Screener IDX',
    url: 'screener.nasihulwan.com',
    href: 'https://screener.nasihulwan.com',
    shot: '/shots/screener.jpg',
    desc: 'Screener saham Indonesia dengan lebih dari 90 emiten dan data pasar dari TradingView.',
    stack: 'React · TradingView',
  },
  {
    name: 'VehicleCare',
    url: 'bengkel.nasihulwan.com',
    href: 'https://bengkel.nasihulwan.com',
    shot: '/shots/bengkel.jpg',
    desc: 'Catatan perawatan kendaraan: pengingat jatuh tempo berbasis KM dan waktu, riwayat biaya per unit.',
    stack: 'Aplikasi web & mobile',
  },
  {
    name: 'Bimbel App',
    url: 'bimbel.kiosagen.web.id',
    href: 'https://bimbel.kiosagen.web.id',
    shot: '/shots/bimbel.jpg',
    desc: 'Manajemen bimbel: presensi kelas, kuis dengan penilaian otomatis, tagihan SPP QRIS.',
    stack: 'Go · React · QRIS',
  },
  {
    name: 'KiosAgen',
    url: 'kiosagen.web.id',
    href: 'https://kiosagen.web.id',
    shot: '/shots/kiosagen.jpg',
    desc: 'POS dan marketplace untuk agrikultur, multi-tenant (SaaS).',
    stack: 'GoFiber · React · Docker',
  },
  {
    name: 'Automation Report System',
    url: 'report.ars-appdev.web.id',
    href: 'https://report.ars-appdev.web.id',
    shot: '/shots/ars.jpg',
    desc: 'Sistem laporan otomatis dengan pipeline deploy GitHub Actions ke GHCR.',
    stack: 'Docker · GitHub Actions',
  },
]

const TOOLBOX = [
  { k: 'Bahasa & Framework', v: 'C#, ASP.NET, Flutter, Dart, Node.js, Express.js, React.js, Go' },
  { k: 'Basis Data', v: 'SQL Server, Oracle, SQLite, PostgreSQL' },
  { k: 'Alat & DevOps', v: 'Git, GitHub, GitLab, Docker, Jenkins, pipeline CI/CD' },
  { k: 'Konsep', v: 'Arsitektur REST, microservices, background service, sistem high-concurrency, mobile lintas platform' },
]

function SectionTitle({ n, title, id }: { n: string; title: string; id?: string }) {
  return (
    <div id={id} className="reveal flex items-baseline gap-4 scroll-mt-24">
      <span className="font-mono-tech text-[11px] tracking-[.2em] font-bold" style={{ color: 'var(--red)' }}>
        {n}
      </span>
      <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight uppercase">{title}</h2>
      <span className="flex-1 border-t" style={{ borderColor: 'var(--graphite)' }} />
    </div>
  )
}

export default function App() {
  useReveal()

  return (
    <div className="min-h-screen py-3 sm:py-5 px-2 sm:px-4">
      {/* Bingkai lembar ganda (motif identitas) */}
      <div className="sheet-frame relative mx-auto max-w-[1080px] bg-[var(--paper)] px-4 sm:px-8 lg:px-12 pt-5 pb-8">
        {/* ============ HEADER / TITLE STRIP ============ */}
        <header className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 pb-3 border-b" style={{ borderColor: 'var(--graphite)' }}>
          <span className="font-mono-tech text-[10px] sm:text-[11px] tracking-[.18em] uppercase" style={{ color: 'var(--fade)' }}>
            nasihulwan.com · portofolio
          </span>
          <nav aria-label="Navigasi utama" className="flex flex-wrap gap-x-5 gap-y-1">
            {NAV.map(n => (
              <a
                key={n.href}
                href={n.href}
                className="font-mono-tech text-[11px] tracking-[.14em] uppercase hover:underline underline-offset-4 decoration-2 transition-colors"
                style={{ color: 'var(--graphite)', textDecorationColor: 'var(--red)' }}
              >
                {n.label}
              </a>
            ))}
            <a
              href="/cv.pdf"
              download
              className="font-mono-tech text-[11px] tracking-[.14em] uppercase font-bold px-2 py-0.5 r-1 transition-colors"
              style={{ color: 'var(--paper)', background: 'var(--red)' }}
            >
              Unduh CV
            </a>
          </nav>
        </header>

        {/* ============ HERO ============ */}
        <section className="pt-8 sm:pt-12 reveal">
          <p className="font-mono-tech text-[10px] sm:text-[11px] tracking-[.26em] uppercase mb-4" style={{ color: 'var(--red)' }}>
            Lembar01 · Fullstack Developer
          </p>
          <h1 className="font-extrabold uppercase leading-[0.94] tracking-[-0.02em] text-[clamp(34px,9vw,68px)]">
            Abdullah
            <br />
            Nasih Ulwan
          </h1>
          <p className="font-display italic text-lg sm:text-2xl mt-4 max-w-[46ch]" style={{ color: 'var(--graphite-2)' }}>
            Empat tahun di ruang mesin perbankan dan asuransi, sekarang merakit produknya sendiri.
          </p>

          {/* Statistik nyata (sumber: CV & verifikasi URL live) */}
          <div className="grid grid-cols-3 gap-px mt-8 border" style={{ background: 'var(--graphite)', borderColor: 'var(--graphite)' }}>
            {[
              { v: '4+', k: 'Tahun kerja' },
              { v: '2', k: 'Lembaga: BNI & Mandiri Inhealth' },
              { v: '6', k: 'Produk live' },
            ].map(s => (
              <div key={s.k} className="px-3 sm:px-5 py-4" style={{ background: 'var(--paper)' }}>
                <div className="font-mono-tech text-2xl sm:text-4xl font-bold">{s.v}</div>
                <div className="text-[10px] sm:text-xs mt-1 leading-snug" style={{ color: 'var(--graphite-2)' }}>{s.k}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ============ REKAM JEJAK ============ */}
        <section className="pt-12">
          <SectionTitle id="rekam-jejak" n="01" title="Rekam Jejak" />
          <div className="mt-6 space-y-8">
            {EXPERIENCE.map(x => (
              <article key={x.company} className="reveal">
                {/* Garis dimensi masa kerja (motif identitas) */}
                <div className="flex items-center gap-3 font-mono-tech text-xs font-bold" style={{ color: 'var(--red)' }}>
                  <span>{x.from}</span>
                  <span className="dim-line dim-line-red flex-1" aria-hidden />
                  <span className="text-[10px] tracking-[.14em]" style={{ color: 'var(--fade)' }}>{x.span}</span>
                  <span className="dim-line dim-line-red flex-1" aria-hidden />
                  <span>{x.to}</span>
                </div>
                <h3 className="mt-3 text-lg sm:text-xl font-bold">{x.company}</h3>
                <p className="font-mono-tech text-[11px] mt-1" style={{ color: 'var(--graphite-2)' }}>
                  {x.role} · {x.client}
                </p>
                <ul className="mt-3 space-y-2">
                  {x.items.map(i => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: 'var(--graphite-2)' }}>
                      <span className="font-mono-tech text-[10px] mt-1.5 shrink-0" style={{ color: 'var(--red)' }}>[+]</span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* ============ KARYA LAPANGAN ============ */}
        <section className="pt-12">
          <SectionTitle id="karya" n="02" title="Karya Lapangan" />
          <p className="font-mono-tech text-[11px] mt-3" style={{ color: 'var(--fade)' }}>
            Enam produk dengan alamat live yang bisa dicek langsung.
          </p>

          <div className="mt-5 grid sm:grid-cols-2 gap-4">
            {PRODUCTS.map((p, idx) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className={`reveal group block border r-2 overflow-hidden transition-all hover:-translate-y-1 focus-visible:-translate-y-1 ${idx === 0 || idx === PRODUCTS.length - 1 ? 'sm:col-span-2' : ''}`}
                style={{ borderColor: 'var(--graphite)', background: 'var(--paper)', boxShadow: '3px 4px 0 rgba(43,43,43,.18)' }}
              >
                <div className={`relative overflow-hidden border-b ${idx === 0 ? 'aspect-[16/7]' : 'aspect-[16/9]'}`} style={{ borderColor: 'var(--rule)', background: 'var(--paper-2)' }}>
                  <img src={p.shot} alt={`Tangkapan layar ${p.name}`} loading="lazy" className="w-full h-full object-cover object-top" />
                  <span className="absolute top-2 right-2 font-mono-tech text-[10px] font-bold px-1.5 py-0.5 r-1" style={{ background: 'var(--red)', color: 'var(--paper)' }}>
                    [LIVE]
                  </span>
                </div>
                <div className="p-4">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-bold text-base sm:text-lg">{p.name}</h3>
                    <ArrowUpRight size={15} className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ color: 'var(--red)' }} />
                  </div>
                  <p className="font-mono-tech text-[11px] mt-1" style={{ color: 'var(--graphite-2)' }}>{p.url}</p>
                  <p className="text-sm mt-2 leading-relaxed" style={{ color: 'var(--graphite-2)' }}>{p.desc}</p>
                  <p className="font-mono-tech text-[10px] tracking-[.1em] uppercase mt-3" style={{ color: 'var(--fade)' }}>{p.stack}</p>
                </div>
              </a>
            ))}
          </div>


        </section>

        {/* ============ KOTAK PERALATAN ============ */}
        <section className="pt-12">
          <SectionTitle id="peralatan" n="03" title="Kotak Peralatan" />
          <div className="mt-6 grid md:grid-cols-[1.6fr_1fr] gap-6">
            <div className="reveal border r-2" style={{ borderColor: 'var(--graphite)' }}>
              {TOOLBOX.map((t, i) => (
                <div key={t.k} className={`px-4 py-3 ${i === 0 ? '' : 'border-t'}`} style={{ borderColor: 'var(--rule)' }}>
                  <div className="font-mono-tech text-[10px] tracking-[.18em] uppercase" style={{ color: 'var(--red)' }}>{t.k}</div>
                  <div className="text-sm mt-1 leading-relaxed" style={{ color: 'var(--graphite)' }}>{t.v}</div>
                </div>
              ))}
            </div>
            <div className="reveal space-y-4">
              <div className="border r-2 p-4" style={{ borderColor: 'var(--graphite)' }}>
                <div className="font-mono-tech text-[10px] tracking-[.18em] uppercase" style={{ color: 'var(--red)' }}>Pendidikan</div>
                <p className="text-sm mt-2 font-semibold leading-snug">S1 Informatika</p>
                <p className="text-sm" style={{ color: 'var(--graphite-2)' }}>Universitas Indraprasta PGRI</p>
                <p className="font-mono-tech text-[11px] mt-1" style={{ color: 'var(--fade)' }}>2017-2021 · IPK 3.41/4.00</p>
              </div>
              <div className="border r-2 p-4" style={{ borderColor: 'var(--graphite)' }}>
                <div className="font-mono-tech text-[10px] tracking-[.18em] uppercase" style={{ color: 'var(--red)' }}>Bahasa</div>
                <p className="text-sm mt-2" style={{ color: 'var(--graphite)' }}>Bahasa Indonesia (native)</p>
                <p className="text-sm" style={{ color: 'var(--graphite-2)' }}>Inggris (basic · working knowledge)</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ KONTAK ============ */}
        <section className="pt-12">
          <SectionTitle id="kontak" n="04" title="Kontak" />
          <div className="reveal mt-6 space-y-3">
            {[
              { label: 'nasihulwan1204@gmail.com', href: 'mailto:nasihulwan1204@gmail.com', icon: true },
              { label: 'linkedin.com/in/nasih1204', href: 'https://linkedin.com/in/nasih1204', icon: false },
              { label: 'github.com/nasih12', href: 'https://github.com/nasih12', icon: false },
            ].map(c => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 border-b pb-3 transition-colors"
                style={{ borderColor: 'var(--rule)' }}
              >
                <span className="font-mono-tech text-sm sm:text-lg break-all" style={{ color: 'var(--graphite)' }}>{c.label}</span>
                <span className="flex items-center gap-1.5 shrink-0 text-[10px] font-mono-tech tracking-[.14em] uppercase opacity-70 group-hover:opacity-100" style={{ color: 'var(--red)' }}>
                  {c.icon ? <Mail size={14} /> : null}
                  {c.href.startsWith('http') ? <><ArrowUpRight size={14} /> buka</> : 'kirim'}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* ============ TITLE BLOCK (footer, motif identitas) ============ */}
        <footer className="mt-14 flex justify-end">
          <div className="w-full sm:w-[420px] border-t border-l" style={{ borderColor: 'var(--graphite)' }}>
            {[
              ['Digambar', 'Abdullah N. Ulwan'],
              ['Material', '.NET · Flutter · React · Go'],
              ['Lembar', 'Portofolio / 01'],
              ['Rev', '2026.10 · Jakarta'],
            ].map(([k, v], i) => (
              <div key={k} className="flex border-b" style={{ borderColor: i === 3 ? 'var(--graphite)' : 'var(--rule)' }}>
                <span className="w-24 px-3 py-1.5 font-mono-tech text-[9px] tracking-[.14em] uppercase border-r" style={{ borderColor: 'var(--rule)', color: 'var(--fade)' }}>{k}</span>
                <span className="px-3 py-1.5 font-mono-tech text-[10px] font-bold" style={{ color: 'var(--graphite)' }}>{v}</span>
              </div>
            ))}
          </div>
        </footer>
      </div>
    </div>
  )
}
