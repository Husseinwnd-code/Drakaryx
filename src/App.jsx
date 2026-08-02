import React, { useEffect, useMemo, useRef, useState } from 'react'
import {
  ArrowRight,
  Check,
  ChevronDown,
  Factory,
  Flame,
  Globe2,
  Leaf,
  Mail,
  Menu,
  PackageCheck,
  ShieldCheck,
  Timer,
  X,
} from 'lucide-react'
import logo from './assets/drakaryx-logo.jpeg'

const copy = {
  en: {
    nav: ['Home', 'Products', 'Wholesale', 'About', 'Contact'],
    eyebrow: 'BORN FROM FIRE',
    titleA: 'PREMIUM',
    titleB: 'COCONUT CHARCOAL',
    body: 'Premium coconut charcoal for professional shisha lounges, wholesalers and distributors across Europe.',
    primary: 'Explore products',
    secondary: 'Get wholesale quote',
    quote: 'Request a quote',
    scroll: 'SCROLL TO DISCOVER',
    wholesaleBenefits: ['Retail and wholesale packaging', 'OEM and private-label options', 'Europe-focused brand presentation'],
    aboutPills: ['Production network', 'Quality focused', 'European market'],
    metrics: [
      ['100%', 'Coconut shell'],
      ['110–120 min', 'Target burn time'],
      ['≤ 2.5%', 'Target ash content'],
      ['OEM', 'Private label available'],
    ],
    productsKicker: 'PRODUCT RANGE',
    products: 'Built for every order size.',
    productsBody: 'Retail-ready packs and wholesale formats designed for consistent presentation across European markets.',
    view: 'Request details',
    wholesaleKicker: 'WHOLESALE',
    grow: 'A reliable supply partner for your market.',
    growBody: 'We are building DRAKARYX for long-term cooperation with importers, distributors and shisha professionals. Tell us your market, volume and packaging requirements.',
    wholesale: 'Request price list',
    aboutKicker: 'THE BRAND',
    aboutTitle: 'European positioning. Indonesian production expertise.',
    aboutBody: 'DRAKARYX is being developed as a premium German-based charcoal brand, with plans to establish a GmbH. Our focus is clear communication, dependable quality control and packaging that performs on the shelf.',
    contactKicker: 'BUSINESS INQUIRY',
    contactTitle: 'Let’s discuss your market.',
    contactBody: 'Share your expected quantity, destination and preferred packaging. We will reply with the relevant product and wholesale information.',
    fields: ['Company name', 'Business email', 'Country / Market', 'Estimated quantity and requirements'],
    burnKicker: 'REAL BURN TEST', burnTitle: 'Tested for up to 120 minutes.', burnBody: 'Three original photographs document the tested charcoal beside the timer, glowing on the mesh and inside the burn chamber.',
    burnLabels: ['Timer test', 'Glowing charcoal', 'Burn chamber'],
    send: 'Send inquiry',
  },
  de: {
    nav: ['Start', 'Produkte', 'Großhandel', 'Über uns', 'Kontakt'],
    eyebrow: 'AUS FEUER GEBOREN',
    titleA: 'PREMIUM',
    titleB: 'KOKOSKOHLE',
    body: 'Premium-Kokoskohle für professionelle Shisha-Lounges, Großhändler und Distributoren in Europa.',
    primary: 'Produkte entdecken',
    secondary: 'Großhandelspreis anfragen',
    quote: 'Angebot anfragen',
    scroll: 'MEHR ENTDECKEN',
    wholesaleBenefits: ['Verkaufs- und Großhandelsverpackungen', 'OEM- und Private-Label-Optionen', 'Markenauftritt für Europa'],
    aboutPills: ['Produktionsnetzwerk', 'Qualitätsorientiert', 'Europäischer Markt'],
    metrics: [
      ['100%', 'Kokosnussschale'],
      ['110–120 Min.', 'Ziel-Brenndauer'],
      ['≤ 2,5%', 'Ziel-Aschegehalt'],
      ['OEM', 'Private Label möglich'],
    ],
    productsKicker: 'PRODUKTSORTIMENT',
    products: 'Für jede Bestellgröße.',
    productsBody: 'Verkaufsfertige Verpackungen und Großhandelsformate für einen einheitlichen Auftritt im europäischen Markt.',
    view: 'Details anfragen',
    wholesaleKicker: 'GROSSHANDEL',
    grow: 'Ein zuverlässiger Lieferpartner für Ihren Markt.',
    growBody: 'DRAKARYX wird für langfristige Kooperationen mit Importeuren, Distributoren und Shisha-Profis aufgebaut. Teilen Sie uns Markt, Menge und Verpackungswünsche mit.',
    wholesale: 'Preisliste anfragen',
    aboutKicker: 'DIE MARKE',
    aboutTitle: 'Europäische Positionierung. Indonesische Produktionserfahrung.',
    aboutBody: 'DRAKARYX wird als hochwertige, in Deutschland ansässige Kohlemarke entwickelt; die Gründung einer GmbH ist geplant. Im Mittelpunkt stehen klare Kommunikation, verlässliche Qualitätskontrolle und eine starke Warenpräsentation.',
    contactKicker: 'GESCHÄFTSANFRAGE',
    contactTitle: 'Sprechen wir über Ihren Markt.',
    contactBody: 'Nennen Sie uns gewünschte Menge, Zielort und Verpackung. Wir senden Ihnen die passenden Produkt- und Großhandelsinformationen.',
    fields: ['Firmenname', 'Geschäftliche E-Mail', 'Land / Markt', 'Geschätzte Menge und Anforderungen'],
    burnKicker: 'ECHTER BRENTEST', burnTitle: 'Bis zu 120 Minuten getestet.', burnBody: 'Drei Originalfotos dokumentieren die getestete Kohle neben dem Timer, glühend auf dem Gitter und in der Brennkammer.',
    burnLabels: ['Timer-Test', 'Glühende Kohle', 'Brennkammer'],
    send: 'Anfrage senden',
  },
  ar: {
    nav: ['الرئيسية', 'المنتجات', 'الجملة', 'من نحن', 'التواصل'],
    eyebrow: 'وُلِدَ من النار',
    titleA: 'فحم جوز هند',
    titleB: 'فاخر',
    body: 'فحم جوز هند فاخر مخصص لمقاهي الأراكيل وتجار الجملة والموزعين في الأسواق الأوروبية.',
    primary: 'استكشف المنتجات',
    secondary: 'اطلب سعر الجملة',
    quote: 'اطلب عرض سعر',
    scroll: 'اكتشف المزيد',
    wholesaleBenefits: ['عبوات للبيع بالتجزئة والجملة', 'خيارات OEM والعلامة الخاصة', 'هوية مخصصة للسوق الأوروبية'],
    aboutPills: ['شبكة إنتاج', 'تركيز على الجودة', 'السوق الأوروبية'],
    metrics: [
      ['100%', 'قشور جوز الهند'],
      ['110–120 دقيقة', 'مدة الاحتراق المستهدفة'],
      ['≤ 2.5%', 'نسبة الرماد المستهدفة'],
      ['OEM', 'علامة خاصة متاحة'],
    ],
    productsKicker: 'مجموعة المنتجات',
    products: 'خيارات تناسب كل حجم طلب.',
    productsBody: 'عبوات مخصصة للبيع بالتجزئة وصيغ بالجملة بهوية موحدة تناسب الأسواق الأوروبية.',
    view: 'اطلب التفاصيل',
    wholesaleKicker: 'البيع بالجملة',
    grow: 'شريك توريد موثوق لسوقك.',
    growBody: 'نبني DRAKARYX للتعاون طويل الأمد مع المستوردين والموزعين ومحترفي الأراكيل. أخبرنا بالسوق والكمية ومتطلبات التغليف.',
    wholesale: 'اطلب قائمة الأسعار',
    aboutKicker: 'العلامة التجارية',
    aboutTitle: 'هوية أوروبية وخبرة إنتاج إندونيسية.',
    aboutBody: 'يتم تطوير DRAKARYX كعلامة فحم فاخرة مقرها ألمانيا، مع خطة لتأسيس شركة GmbH. نركز على التواصل الواضح ومراقبة الجودة والتغليف القوي على رفوف المتاجر.',
    contactKicker: 'استفسار تجاري',
    contactTitle: 'دعنا نتحدث عن سوقك.',
    contactBody: 'أرسل الكمية المتوقعة ووجهة الشحن ونوع التغليف المطلوب، وسنرسل لك معلومات المنتج والجملة المناسبة.',
    fields: ['اسم الشركة', 'البريد التجاري', 'الدولة / السوق', 'الكمية المتوقعة والمتطلبات'],
    burnKicker: 'اختبار احتراق حقيقي', burnTitle: 'مدة احتراق مختبرة حتى 120 دقيقة.', burnBody: 'توثّق ثلاث صور أصلية الفحم المختبر بجانب المؤقت، متوهجًا على الشبكة وداخل غرفة الاحتراق.',
    burnLabels: ['اختبار المؤقت', 'الفحم المتوهج', 'غرفة الاحتراق'],
    send: 'إرسال الاستفسار',
  },
}

const products = [
  { weight: '1 KG', detail: 'Premium retail pack', cubes: '27 × 27 × 27 mm · 72 cubes' },
  { weight: '10 KG', detail: 'Professional wholesale box', cubes: '27 × 27 × 27 mm · 720 cubes' },
]

function BrandMark({ compact = false }) {
  return <div className={`brand-mark ${compact ? 'is-compact' : ''}`}><img src={logo} alt="DRAKARYX premium coconut charcoal" /></div>
}

function ProductBox3D({ size = 'hero', label = '1 KG', interactive = false, className = '' }) {
  const sceneRef = useRef(null)

  useEffect(() => {
    const scene = sceneRef.current
    if (!interactive || !scene) return
    const move = (event) => {
      const rect = scene.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width - 0.5
      const y = (event.clientY - rect.top) / rect.height - 0.5
      scene.style.setProperty('--rotate-x', `${-y * 3.5}deg`)
      scene.style.setProperty('--rotate-y', `${-4 + x * 7}deg`)
      scene.style.setProperty('--light-x', `${50 + x * 22}%`)
    }
    const reset = () => {
      scene.style.setProperty('--rotate-x', '-1deg')
      scene.style.setProperty('--rotate-y', '-4deg')
      scene.style.setProperty('--light-x', '50%')
    }
    scene.addEventListener('pointermove', move)
    scene.addEventListener('pointerleave', reset)
    return () => {
      scene.removeEventListener('pointermove', move)
      scene.removeEventListener('pointerleave', reset)
    }
  }, [interactive])

  return (
    <div ref={sceneRef} className={`product-scene ${size} ${interactive ? 'interactive' : ''} ${className}`}>
      <div className="product-halo" />
      <div className="product-floor" />
      <div className="box-3d">
        <div className="box-face box-front">
          <div className="package-logo"><img src={logo} alt="DRAKARYX packaging" /></div>
          <p className="package-subtitle">PREMIUM COCONUT CHARCOAL</p>
          <div className="package-rule" />
          <p className="package-motto"><Flame size={14} /> BORN FROM FIRE</p>
          <strong className="package-weight">{label}</strong>
        </div>
        <div className="box-face box-side">
          <p className="side-name">DRAKARYX</p>
          <div className="side-list">
            <span><Leaf />100% COCONUT SHELL</span>
            <span><Timer />LONG BURNING</span>
            <span><ShieldCheck />LOW ASH</span>
            <span><PackageCheck />CONSISTENT SIZE</span>
          </div>
        </div>
        <div className="box-face box-top" />
      </div>
      <div className="charcoal-stack" aria-hidden="true"><i /><i /><i /></div>
    </div>
  )
}

function App() {
  const [lang, setLang] = useState('en')
  const [menuOpen, setMenuOpen] = useState(false)
  const t = useMemo(() => copy[lang], [lang])
  const rtl = lang === 'ar'
  const navTargets = ['#home', '#products', '#wholesale', '#about', '#contact']

  return (
    <div dir={rtl ? 'rtl' : 'ltr'} className="site-shell">
      <header className="topbar">
        <a href="#home" className="top-logo" aria-label="DRAKARYX home"><BrandMark compact /></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {t.nav.map((item, index) => <a key={item} href={navTargets[index]}>{item}</a>)}
        </nav>
        <div className="top-actions">
          <label className="language-picker">
            <Globe2 size={16} />
            <select value={lang} onChange={(event) => setLang(event.target.value)} aria-label="Language">
              <option value="en">EN</option><option value="de">DE</option><option value="ar">AR</option>
            </select>
            <ChevronDown size={14} />
          </label>
          <a className="quote-button" href="#contact">{t.quote}</a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <div className="mobile-menu">{t.nav.map((item, index) => <a onClick={() => setMenuOpen(false)} key={item} href={navTargets[index]}>{item}</a>)}</div>}
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="studio-light" />
          <div className="hero-copy">
            <p className="eyebrow">{t.eyebrow}</p>
            <h1><span>{t.titleA}</span><strong>{t.titleB}</strong></h1>
            <p className="hero-body">{t.body}</p>
            <div className="hero-buttons">
              <a className="button button-primary" href="#products">{t.primary}<ArrowRight size={17} /></a>
              <a className="button button-secondary" href="#wholesale">{t.secondary}</a>
            </div>
          </div>
          <div className="hero-product"><ProductBox3D interactive label="1 KG" className="hero-box-main" /></div>
          <div className="scroll-note"><span /> {t.scroll}</div>
        </section>


        <section id="products" className="products-section section-wrap">
          <div className="section-intro">
            <div><p className="section-kicker">{t.productsKicker}</p><h2>{t.products}</h2></div>
            <p>{t.productsBody}</p>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.weight}>
                <div className="card-visual"><ProductBox3D size="card" label={product.weight} /></div>
                <div className="product-info">
                  <div><p>{product.detail}</p><h3>{product.weight}</h3><span>{product.cubes}</span></div>
                  <a href="#contact">{t.view}<ArrowRight size={15} /></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="wholesale" className="wholesale-section section-wrap">
          <div className="wholesale-visual">
            <div className="container-shape"><div className="container-brand">DRAKARYX</div><div className="container-lines" /></div>
          </div>
          <div className="wholesale-copy">
            <p className="section-kicker">{t.wholesaleKicker}</p>
            <h2>{t.grow}</h2>
            <p>{t.growBody}</p>
            <ul>{t.wholesaleBenefits.map((item) => <li key={item}><Check /> {item}</li>)}</ul>
            <a className="button button-primary" href="#contact">{t.wholesale}<ArrowRight size={17} /></a>
          </div>
        </section>


        <section className="burn-test-section section-wrap">
          <div className="section-intro burn-test-intro">
            <div><p className="section-kicker">{t.burnKicker}</p><h2>{t.burnTitle}</h2></div>
            <p>{t.burnBody}</p>
          </div>
          <div className="burn-test-grid">
            <figure className="burn-test-card burn-test-card-wide">
              <img src="/images/burn-test/timer.jpg" alt={t.burnLabels[0]} loading="lazy" />
              <figcaption><strong>120 MIN</strong><span>{t.burnLabels[0]}</span></figcaption>
            </figure>
            <figure className="burn-test-card">
              <img src="/images/burn-test/closeup.jpg" alt={t.burnLabels[1]} loading="lazy" />
              <figcaption><span>{t.burnLabels[1]}</span></figcaption>
            </figure>
            <figure className="burn-test-card">
              <img src="/images/burn-test/chamber.jpg" alt={t.burnLabels[2]} loading="lazy" />
              <figcaption><span>{t.burnLabels[2]}</span></figcaption>
            </figure>
          </div>
        </section>

        <section id="about" className="about-section section-wrap">
          <div className="about-heading"><p className="section-kicker">{t.aboutKicker}</p><h2>{t.aboutTitle}</h2></div>
          <div className="about-content"><p>{t.aboutBody}</p><div className="about-pill-row"><span><Factory /> {t.aboutPills[0]}</span><span><ShieldCheck /> {t.aboutPills[1]}</span><span><Globe2 /> {t.aboutPills[2]}</span></div></div>
        </section>

        <section id="contact" className="contact-section section-wrap">
          <div className="contact-copy"><p className="section-kicker">{t.contactKicker}</p><h2>{t.contactTitle}</h2><p>{t.contactBody}</p><a href="mailto:info@drakaryx.com"><Mail /> info@drakaryx.com</a></div>
          <form onSubmit={(event) => event.preventDefault()}>
            <input aria-label={t.fields[0]} placeholder={t.fields[0]} />
            <input aria-label={t.fields[1]} type="email" placeholder={t.fields[1]} />
            <input aria-label={t.fields[2]} placeholder={t.fields[2]} />
            <textarea aria-label={t.fields[3]} rows="5" placeholder={t.fields[3]} />
            <button className="button button-primary" type="submit">{t.send}<ArrowRight size={17} /></button>
          </form>
        </section>
      </main>

      <footer>
        <BrandMark compact />
        <div><a href="mailto:info@drakaryx.com">info@drakaryx.com</a><span>© 2026 DRAKARYX · drakaryx.com</span></div>
      </footer>
    </div>
  )
}

export default App
