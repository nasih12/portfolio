export type Lang = 'id' | 'en'

/* Semua teks portofolio dalam dua bahasa. Nama produk/instansi/URL tetap sama.
   Aturan antislop berlaku di dua-duanya: tanpa em dash, tanpa buzzword. */

export interface ExpItem {
  from: string
  to: string
  span: Record<Lang, string>
  company: string
  role: Record<Lang, string>
  client: Record<Lang, string>
  items: Record<Lang, string[]>
}

export const EXPERIENCE: ExpItem[] = [
  {
    from: '2022',
    to: '2025',
    span: { id: '3 TAHUN', en: '3 YEARS' },
    company: 'PT. Indocyber Global Teknologi',
    role: {
      id: '.NET & Flutter Developer · Mei 2022 - Agu 2025',
      en: '.NET & Flutter Developer · May 2022 - Aug 2025',
    },
    client: {
      id: 'Klien: PT. Bank Negara Indonesia (BNI)',
      en: 'Client: PT. Bank Negara Indonesia (BNI)',
    },
    items: {
      id: [
        'Backend ASP.NET & C# untuk Scoring Loan Origination: Digital Loan Fleksi, LMS Retail, WebChannel, eLO Bridging.',
        'Aplikasi mobile Flutter lintas platform: BNI Move (geotagging Google Maps, push notification Firebase), BeSmartKu (Play Store), RodaBundar.',
        'Layanan API throughput tinggi untuk Mobile Banking, integrasi middleware antara sistem pihak ketiga dan sistem pinjaman internal.',
        'Dukungan UAT dan analisis kebutuhan bersama business analyst serta tim QA.',
      ],
      en: [
        'ASP.NET & C# backend for the Scoring Loan Origination system: Digital Loan Fleksi, LMS Retail, WebChannel, eLO Bridging.',
        'Cross-platform Flutter mobile apps: BNI Move (Google Maps geotagging, Firebase push notifications), BeSmartKu (Play Store), RodaBundar.',
        'High-throughput API services for Mobile Banking, middleware integration between third-party systems and internal loan systems.',
        'UAT support and requirement analysis with business analysts and QA teams.',
      ],
    },
  },
  {
    from: '2025',
    to: 'KINI',
    span: { id: 'BERJALAN', en: 'CURRENT' },
    company: 'PT. Digital Tech Asia',
    role: {
      id: 'Fullstack Developer · Agu 2025 - sekarang',
      en: 'Fullstack Developer · Aug 2025 - present',
    },
    client: {
      id: 'Klien: PT. Mandiri Inhealth',
      en: 'Client: PT. Mandiri Inhealth',
    },
    items: {
      id: [
        'Web aplikasi dan layanan API dengan React.js serta ASP.NET Core: New Markis, New Aktuw, Extend Polis.',
        'Perhitungan dan pelaporan asuransi IFRS17: Coinsuirance dan Reinsurance, untuk produk kesehatan dan non-kesehatan.',
        'Arsitektur API scalable, skema basis data, dan stored procedure untuk lalu lintas request volume besar.',
        'Pelaporan otomatis dan dukungan operasional bersama unit bisnis.',
      ],
      en: [
        'Web applications and API services with React.js and ASP.NET Core: New Markis, New Aktuw, Extend Polis.',
        'IFRS17 insurance calculation and reporting: Coinsuirance and Reinsurance, for health and non-health products.',
        'Scalable API architecture, database schemas, and stored procedures for high-volume request traffic.',
        'Automated reporting and operational support with business units.',
      ],
    },
  },
]

export interface Product {
  name: string
  url: string
  href: string
  shot: string
  desc: Record<Lang, string>
  stack: string
}

export const PRODUCTS: Product[] = [
  {
    name: 'Expense + Bot WhatsApp',
    url: 'expense.nasihulwan.com',
    href: 'https://expense.nasihulwan.com',
    shot: '/shots/expense.jpg',
    desc: {
      id: 'Pencatat pengeluaran multi-user dengan audit finansial otomatis, dioperasikan lewat chat WhatsApp.',
      en: 'Multi-user expense tracking with automatic financial audit, operated through WhatsApp chat.',
    },
    stack: 'Go · whatsmeow · Postgres',
  },
  {
    name: 'Stock Screener IDX',
    url: 'screener.nasihulwan.com',
    href: 'https://screener.nasihulwan.com',
    shot: '/shots/screener.jpg',
    desc: {
      id: 'Screener saham Indonesia dengan lebih dari 90 emiten dan data pasar dari TradingView.',
      en: 'Indonesian stock screener covering more than 90 issuers with market data from TradingView.',
    },
    stack: 'React · TradingView',
  },
  {
    name: 'Bimbel App',
    url: 'bimbel.kiosagen.web.id',
    href: 'https://bimbel.kiosagen.web.id',
    shot: '/shots/bimbel.jpg',
    desc: {
      id: 'Manajemen bimbel: presensi kelas, kuis dengan penilaian otomatis, tagihan SPP QRIS.',
      en: 'Tutoring business management: class attendance, auto-graded quizzes, QRIS tuition billing.',
    },
    stack: 'Go · React · QRIS',
  },
  {
    name: 'VehicleCare',
    url: 'bengkel.nasihulwan.com',
    href: 'https://bengkel.nasihulwan.com',
    shot: '/shots/bengkel.jpg',
    desc: {
      id: 'Catatan perawatan kendaraan: pengingat jatuh tempo berbasis KM dan waktu, riwayat biaya per unit.',
      en: 'Vehicle maintenance log: KM and time-based due reminders, per-unit cost history.',
    },
    stack: 'Aplikasi web & mobile',
  },
  {
    name: 'KiosAgen',
    url: 'kiosagen.web.id',
    href: 'https://kiosagen.web.id',
    shot: '/shots/kiosagen.jpg',
    desc: {
      id: 'POS dan marketplace untuk agrikultur, multi-tenant (SaaS).',
      en: 'POS and marketplace for agriculture, multi-tenant (SaaS).',
    },
    stack: 'GoFiber · React · Docker',
  },
  {
    name: 'Automation Report System',
    url: 'report.ars-appdev.web.id',
    href: 'https://report.ars-appdev.web.id',
    shot: '/shots/ars.jpg',
    desc: {
      id: 'Sistem laporan otomatis dengan pipeline deploy GitHub Actions ke GHCR.',
      en: 'Automated reporting system with a GitHub Actions to GHCR deploy pipeline.',
    },
    stack: 'Docker · GitHub Actions',
  },
]

export const TOOLBOX = [
  {
    k: { id: 'Bahasa & Framework', en: 'Languages & Frameworks' },
    v: 'C#, ASP.NET, Flutter, Dart, Node.js, Express.js, React.js, Go',
  },
  {
    k: { id: 'Basis Data', en: 'Databases' },
    v: 'SQL Server, Oracle, SQLite, PostgreSQL',
  },
  {
    k: { id: 'Alat & DevOps', en: 'Tools & DevOps' },
    v: 'Git, GitHub, GitLab, Docker, Jenkins, CI/CD pipelines',
  },
  {
    k: { id: 'Konsep', en: 'Concepts' },
    v: {
      id: 'Arsitektur REST, microservices, background service, sistem high-concurrency, mobile lintas platform',
      en: 'REST architecture, microservices, background services, high-concurrency systems, cross-platform mobile',
    },
  },
]

export const T = {
  id: {
    htmlLang: 'id',
    nav: [
      { href: '#rekam-jejak', label: 'Rekam Jejak' },
      { href: '#karya', label: 'Karya' },
      { href: '#peralatan', label: 'Peralatan' },
      { href: '#kontak', label: 'Kontak' },
    ],
    cv: 'Unduh CV',
    heroKicker: 'Lembar 01 · Fullstack Developer',
    heroName1: 'Abdullah',
    heroName2: 'Nasih Ulwan',
    tagline: 'Empat tahun di ruang mesin perbankan dan asuransi, sekarang merakit produknya sendiri.',
    stats: [
      { v: '4+', k: 'Tahun kerja' },
      { v: '2', k: 'Lembaga: BNI & Mandiri Inhealth' },
      { v: '6', k: 'Produk live' },
    ],
    rekam: 'Rekam Jejak',
    karya: 'Karya Lapangan',
    karyaLead: 'Enam produk dengan alamat live yang bisa dicek langsung.',
    peralatan: 'Kotak Peralatan',
    pendidikan: 'Pendidikan',
    s1: 'S1 Informatika',
    ipk: '2017-2021 · IPK 3.41/4.00',
    bahasa: 'Bahasa',
    bahasaId: 'Bahasa Indonesia (native)',
    bahasaEn: 'Inggris (basic · working knowledge)',
    kontak: 'Kontak',
    kirim: 'kirim',
    buka: 'buka',
    footer: [
      ['Digambar', 'Abdullah N. Ulwan'],
      ['Material', '.NET · Flutter · React · Go'],
      ['Lembar', 'Portofolio / 01'],
      ['Rev', '2026.10 · Jakarta'],
    ] as [string, string][],
    shotAlt: (n: string) => `Tangkapan layar ${n}`,
  },
  en: {
    htmlLang: 'en',
    nav: [
      { href: '#rekam-jejak', label: 'Track Record' },
      { href: '#karya', label: 'Work' },
      { href: '#peralatan', label: 'Toolbox' },
      { href: '#kontak', label: 'Contact' },
    ],
    cv: 'Download CV',
    heroKicker: 'Sheet 01 · Fullstack Developer',
    heroName1: 'Abdullah',
    heroName2: 'Nasih Ulwan',
    tagline: 'Four years inside banking and insurance engines, now shipping products of his own.',
    stats: [
      { v: '4+', k: 'Years of experience' },
      { v: '2', k: 'Institutions: BNI & Mandiri Inhealth' },
      { v: '6', k: 'Live products' },
    ],
    rekam: 'Track Record',
    karya: 'Selected Work',
    karyaLead: 'Six products with live addresses you can check yourself.',
    peralatan: 'Toolbox',
    pendidikan: 'Education',
    s1: 'B.Sc. Computer Science',
    ipk: '2017-2021 · GPA 3.41/4.00',
    bahasa: 'Languages',
    bahasaId: 'Indonesian (native)',
    bahasaEn: 'English (basic working knowledge)',
    kontak: 'Contact',
    kirim: 'email',
    buka: 'open',
    footer: [
      ['Drawing', 'Abdullah N. Ulwan'],
      ['Material', '.NET · Flutter · React · Go'],
      ['Sheet', 'Portfolio / 01'],
      ['Rev', '2026.10 · Jakarta'],
    ] as [string, string][],
    shotAlt: (n: string) => `Screenshot of ${n}`,
  },
} as const
