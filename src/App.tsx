import { useEffect, useState } from 'react'
import { ArrowUpRight, Mail } from 'lucide-react'
import {
  type Lang, T, EXPERIENCE, PRODUCTS, TOOLBOX,
} from './i18n'

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

function useLang(): [Lang, (l: Lang) => void] {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem('lang')
    if (saved === 'id' || saved === 'en') return saved
    return navigator.language.startsWith('id') ? 'id' : 'en'
  })
  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = T[lang].htmlLang
  }, [lang])
  return [lang, setLangState]
}

export default function App() {
  const [lang, setLang] = useLang()
  const t = T[lang]
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
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <nav aria-label="Navigasi utama" className="flex flex-wrap gap-x-5 gap-y-1">
              {t.nav.map(n => (
                <a
                  key={n.href}
                  href={n.href}
                  className="font-mono-tech text-[11px] tracking-[.14em] uppercase hover:underline underline-offset-4 decoration-2 transition-colors"
                  style={{ color: 'var(--graphite)', textDecorationColor: 'var(--red)' }}
                >
                  {n.label}
                </a>
              ))}
            </nav>
            {/* Pilih bahasa (perilaku nyata: simpan + ganti <html lang>) */}
            <div
              className="flex items-center border r-1 overflow-hidden"
              style={{ borderColor: 'var(--graphite)' }}
              role="group"
              aria-label="Pilih bahasa"
            >
              {(['id', 'en'] as const).map(l => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  aria-pressed={lang === l}
                  className="font-mono-tech text-[10px] font-bold px-1.5 py-0.5 uppercase transition-colors"
                  style={{
                    background: lang === l ? 'var(--red)' : 'transparent',
                    color: lang === l ? 'var(--paper)' : 'var(--graphite-2)',
                  }}
                >
                  {l}
                </button>
              ))}
            </div>
            <a
              href="/cv.pdf"
              download
              className="font-mono-tech text-[11px] tracking-[.14em] uppercase font-bold px-2 py-0.5 r-1 transition-colors"
              style={{ color: 'var(--paper)', background: 'var(--red)' }}
            >
              {t.cv}
            </a>
          </div>
        </header>

        {/* ============ HERO ============ */}
        <section className="pt-8 sm:pt-12 reveal">
          <p className="font-mono-tech text-[10px] sm:text-[11px] tracking-[.26em] uppercase mb-4" style={{ color: 'var(--red)' }}>
            {t.heroKicker}
          </p>
          <h1 className="font-extrabold uppercase leading-[0.94] tracking-[-0.02em] text-[clamp(34px,9vw,68px)]">
            {t.heroName1}
            <br />
            {t.heroName2}
          </h1>
          <p className="font-display italic text-lg sm:text-2xl mt-4 max-w-[46ch]" style={{ color: 'var(--graphite-2)' }}>
            {t.tagline}
          </p>

          {/* Statistik nyata (sumber: CV & verifikasi URL live) */}
          <div className="grid grid-cols-3 gap-px mt-8 border" style={{ background: 'var(--graphite)', borderColor: 'var(--graphite)' }}>
            {t.stats.map(s => (
              <div key={s.k} className="px-3 sm:px-5 py-4" style={{ background: 'var(--paper)' }}>
                <div className="font-mono-tech text-2xl sm:text-4xl font-bold">{s.v}</div>
                <div className="text-[10px] sm:text-xs mt-1 leading-snug" style={{ color: 'var(--graphite-2)' }}>{s.k}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ============ REKAM JEJAK ============ */}
        <section className="pt-12">
          <div id="rekam-jejak" className="reveal flex items-baseline gap-4 scroll-mt-24">
            <span className="font-mono-tech text-[11px] tracking-[.2em] font-bold" style={{ color: 'var(--red)' }}>01</span>
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight uppercase">{t.rekam}</h2>
            <span className="flex-1 border-t" style={{ borderColor: 'var(--graphite)' }} />
          </div>
          <div className="mt-6 space-y-8">
            {EXPERIENCE.map(x => (
              <article key={x.company} className="reveal">
                {/* Garis dimensi masa kerja (motif identitas) */}
                <div className="flex items-center gap-3 font-mono-tech text-xs font-bold" style={{ color: 'var(--red)' }}>
                  <span>{x.from}</span>
                  <span className="dim-line dim-line-red flex-1" aria-hidden />
                  <span className="text-[10px] tracking-[.14em]" style={{ color: 'var(--fade)' }}>{x.span[lang]}</span>
                  <span className="dim-line dim-line-red flex-1" aria-hidden />
                  <span>{x.to[lang]}</span>
                </div>
                <h3 className="mt-3 text-lg sm:text-xl font-bold">{x.company}</h3>
                <p className="font-mono-tech text-[11px] mt-1" style={{ color: 'var(--graphite-2)' }}>
                  {x.role[lang]} · {x.client[lang]}
                </p>
                <ul className="mt-3 space-y-2">
                  {x.items[lang].map(i => (
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
          <div id="karya" className="reveal flex items-baseline gap-4 scroll-mt-24">
            <span className="font-mono-tech text-[11px] tracking-[.2em] font-bold" style={{ color: 'var(--red)' }}>02</span>
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight uppercase">{t.karya}</h2>
            <span className="flex-1 border-t" style={{ borderColor: 'var(--graphite)' }} />
          </div>
          <p className="font-mono-tech text-[11px] mt-3" style={{ color: 'var(--fade)' }}>
            {t.karyaLead}
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
                  <img src={p.shot} alt={t.shotAlt(p.name)} loading="lazy" className="w-full h-full object-cover object-top" />
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
                  <p className="text-sm mt-2 leading-relaxed" style={{ color: 'var(--graphite-2)' }}>{p.desc[lang]}</p>
                  <p className="font-mono-tech text-[10px] tracking-[.1em] uppercase mt-3" style={{ color: 'var(--fade)' }}>{typeof p.stack === 'string' ? p.stack : p.stack[lang]}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ============ KOTAK PERALATAN ============ */}
        <section className="pt-12">
          <div id="peralatan" className="reveal flex items-baseline gap-4 scroll-mt-24">
            <span className="font-mono-tech text-[11px] tracking-[.2em] font-bold" style={{ color: 'var(--red)' }}>03</span>
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight uppercase">{t.peralatan}</h2>
            <span className="flex-1 border-t" style={{ borderColor: 'var(--graphite)' }} />
          </div>
          <div className="mt-6 grid md:grid-cols-[1.6fr_1fr] gap-6">
            <div className="reveal border r-2" style={{ borderColor: 'var(--graphite)' }}>
              {TOOLBOX.map((tb, i) => (
                <div key={tb.k.id} className={`px-4 py-3 ${i === 0 ? '' : 'border-t'}`} style={{ borderColor: 'var(--rule)' }}>
                  <div className="font-mono-tech text-[10px] tracking-[.18em] uppercase" style={{ color: 'var(--red)' }}>{tb.k[lang]}</div>
                  <div className="text-sm mt-1 leading-relaxed" style={{ color: 'var(--graphite)' }}>{typeof tb.v === 'string' ? tb.v : tb.v[lang]}</div>
                </div>
              ))}
            </div>
            <div className="reveal space-y-4">
              <div className="border r-2 p-4" style={{ borderColor: 'var(--graphite)' }}>
                <div className="font-mono-tech text-[10px] tracking-[.18em] uppercase" style={{ color: 'var(--red)' }}>{t.pendidikan}</div>
                <p className="text-sm mt-2 font-semibold leading-snug">{t.s1}</p>
                <p className="text-sm" style={{ color: 'var(--graphite-2)' }}>Universitas Indraprasta PGRI</p>
                <p className="font-mono-tech text-[11px] mt-1" style={{ color: 'var(--fade)' }}>{t.ipk}</p>
              </div>
              <div className="border r-2 p-4" style={{ borderColor: 'var(--graphite)' }}>
                <div className="font-mono-tech text-[10px] tracking-[.18em] uppercase" style={{ color: 'var(--red)' }}>{t.bahasa}</div>
                <p className="text-sm mt-2" style={{ color: 'var(--graphite)' }}>{t.bahasaId}</p>
                <p className="text-sm" style={{ color: 'var(--graphite-2)' }}>{t.bahasaEn}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ KONTAK ============ */}
        <section className="pt-12">
          <div id="kontak" className="reveal flex items-baseline gap-4 scroll-mt-24">
            <span className="font-mono-tech text-[11px] tracking-[.2em] font-bold" style={{ color: 'var(--red)' }}>04</span>
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight uppercase">{t.kontak}</h2>
            <span className="flex-1 border-t" style={{ borderColor: 'var(--graphite)' }} />
          </div>
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
                  {c.href.startsWith('http') ? <><ArrowUpRight size={14} /> {t.buka}</> : t.kirim}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* ============ TITLE BLOCK (footer, motif identitas) ============ */}
        <footer className="mt-14 flex justify-end">
          <div className="w-full sm:w-[420px] border-t border-l" style={{ borderColor: 'var(--graphite)' }}>
            {t.footer.map(([k, v], i) => (
              <div key={k} className="flex border-b" style={{ borderColor: i === t.footer.length - 1 ? 'var(--graphite)' : 'var(--rule)' }}>
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
