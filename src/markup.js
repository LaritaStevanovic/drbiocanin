// Sav sadržaj sajta i markup, kao statički HTML string (SSG-friendly).
export const services = [
  { num: "01", title: "Opšta stomatologija", desc: "Pregled, čišćenje kamenca i plomba. Ono zbog čega većina i dolazi kod zubara.", icon: "M12 4.2C10.6 2.8 8.7 2.3 7.2 3 5.6 3.7 4.7 5.5 4.7 7.6c0 1.8.5 3.4 1 5.1.4 1.6.6 4.3 1.8 4.3 1.1 0 1.3-2.1 1.6-3.9.3-1.4.5-2.7 1.1-2.7s.8 1.3 1.1 2.7c.3 1.8.5 3.9 1.6 3.9 1.2 0 1.4-2.7 1.8-4.3.5-1.7 1-3.3 1-5.1 0-2.1-.9-3.9-2.5-4.6-1.5-.7-3.4-.2-4.8 1.2z" },
  { num: "02", title: "Estetska stomatologija", desc: "Izbeljivanje i fasete. Kad je zub zdrav ali hoćete da lepše izgleda.", icon: "M10 4l1.6 4.2L16 10l-4.4 1.8L10 16l-1.6-4.2L4 10l4.4-1.8z M17.5 13l.7 1.9 1.9.7-1.9.7-.7 1.9-.7-1.9-1.9-.7 1.9-.7z" },
  { num: "03", title: "Vađenje i oralna hirurgija", desc: "Umnjaci i zubi koji se više ne mogu spasti. Radimo pod lokalnom anestezijom.", icon: "M9 3l1.4 8.4 M15 3l-1.4 8.4 M10.4 11.4h3.2l-.6 8.6h-2z" },
  { num: "04", title: "Dečja stomatologija", desc: "Mlečni zubi i prvi pregledi. Bez žurbe, da dete ne dobije strah od zubara.", icon: "M12 20s-6.5-4.4-8.5-8.3C2 8.8 3.6 6 6.4 6c1.7 0 3 .9 3.6 2 .6-1.1 1.9-2 3.6-2 2.8 0 4.4 2.8 2.9 5.7C18.5 15.6 12 20 12 20z" },
  { num: "05", title: "Lečenje kanala korena", desc: "Kad karijes dođe do živca. Očistimo kanal i zapušimo, da zadržite svoj zub.", icon: "M12 3.5c3 3.6 5 6 5 8.5a5 5 0 0 1-10 0c0-2.5 2-4.9 5-8.5z" },
  { num: "06", title: "Protetika", desc: "Krunice, mostovi i proteze. Kad fali zub ili je previše oštećen za plombu.", icon: "M4 8.5l3.5 2.5L12 5l4.5 6L20 8.5 18 17.5H6z M6.4 20.5h11.2" }
];
export const tier1 = ["Stomatološki pregled i savet","Čišćenje kamenca i poliranje","Bela (estetska) plomba","Vađenje zuba bez bola","Za redovne kontrole i decu"];
export const tier2 = ["Izbeljivanje u ordinaciji","Fasete za oblik i boju","Estetske plombe u boji zuba","Popravka polomljenog zuba","Za lepši i svetliji osmeh"];
export const tier3 = ["Lečenje kanala korena","Krunice i mostovi","Pokretne i totalne proteze","Oralna hirurgija","Za kompletnu obnovu zuba"];
export const reviews = [
  { text: "Prvi put da mi plomba ne ispadne posle par meseci. Sve mi objasnio pre nego što je počeo.", name: "Marija P.", initial: "M", bg: "#e3f4e8", fg: "#2f9a45" },
  { text: "Vadio sam umnjak i mislio da će biti strašno. Nije boleo i gotovo za desetak minuta.", name: "Stefan D.", initial: "S", bg: "#fdeadf", fg: "#e07b3c" },
  { text: "Izbeljivanje je ispalo tačno kako sam želela. Osmeh svetliji, a zubi bez osetljivosti.", name: "Ivana K.", initial: "I", bg: "#e6edfb", fg: "#3a6fd0" },
  { text: "Vodim decu ovde godinama. Nikad nisu plakala, doktor stvarno ima strpljenja.", name: "Nikola M.", initial: "N", bg: "#eae6fb", fg: "#6a4fd0" },
  { text: "Krunica se ne razlikuje od pravog zuba. Cenu rekli unapred, bez naknadnih iznenađenja.", name: "Jelena R.", initial: "J", bg: "#e3f4e8", fg: "#2f9a45" }
];

const B = import.meta.env.BASE_URL;
const star = '<svg width="18" height="18" viewBox="0 0 24 24" fill="#f5843c"><polygon points="12,2 15,9 22,9.3 16.5,14 18.5,21 12,17 5.5,21 7.5,14 2,9.3 9,9"></polygon></svg>';
const check = (col) => `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="${col}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
const phoneSvg = (c, w) => `<svg width="${w}" height="${w}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`;

const svcCards = services.map((s, i) => `
  <div class="svc-card" data-idx="${i}" style="background:#fff; border:1px solid #e2e8ec; border-radius:12px; padding:30px 28px; transition:border-color .15s, transform .15s; cursor:pointer;">
    <div style="width:46px; height:46px; border-radius:10px; background:#eafaef; display:flex; align-items:center; justify-content:center; margin-bottom:20px;">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2f9a45" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="${s.icon}"></path></svg>
    </div>
    <h3 style="font-family:'Plus Jakarta Sans',sans-serif; font-weight:600; font-size:20px; margin-bottom:10px; letter-spacing:-0.01em;">${s.title}</h3>
    <p class="svc-desc" style="font-size:16px; color:#546069; text-wrap:pretty;">${s.desc}</p>
    <span class="svc-hint" style="font-size:14px; color:#0b73c8; font-weight:600;">Dodirni za više</span>
  </div>`).join("");

const tierList = (arr, itemCol) => arr.map(f => `
  <div style="display:flex; gap:12px; align-items:flex-start;">
    <span style="width:20px; height:20px; border-radius:50%; background:#0b73c8; display:flex; align-items:center; justify-content:center; flex-shrink:0; margin-top:2px;">${check('#fff')}</span>
    <span style="font-size:15px; color:${itemCol};">${f}</span>
  </div>`).join("");

const revCards = reviews.concat(reviews).map(r => `
  <div class="rev-card" style="background:#fff; border:1px solid #e2e8ec; border-radius:16px; padding:30px 30px 26px; display:flex; flex-direction:column;">
    <div style="display:flex; gap:3px; margin-bottom:18px;">${star}${star}${star}${star}${star}</div>
    <p style="font-size:17px; color:#2c3a44; line-height:1.55; margin-bottom:24px; text-wrap:pretty;">${r.text}</p>
    <div style="display:flex; align-items:center; gap:13px; margin-top:auto;">
      <span style="width:44px; height:44px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-family:'Plus Jakarta Sans',sans-serif; font-weight:700; font-size:16px; background:${r.bg}; color:${r.fg};">${r.initial}</span>
      <div><div style="font-family:'Plus Jakarta Sans',sans-serif; font-weight:700; font-size:16px; color:#123246;">${r.name}</div></div>
    </div>
  </div>`).join("");

const chevBtn = '<div class="tier-chev-btn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></div>';

export const bodyHTML = `
<div style="background:#ffffff;">
  <div class="splash" id="splash">
    <div class="splash-wrap"><div class="splash-base"></div><div class="splash-fill"></div></div>
  </div>

  <header style="position:sticky; top:0; z-index:50; background:rgba(11,58,102,0.86); backdrop-filter:blur(10px); -webkit-backdrop-filter:blur(10px); border-bottom:1px solid rgba(22,151,232,0.35);">
    <div class="wrap" style="display:flex; align-items:center; justify-content:space-between; height:68px; max-width:none; width:100%; padding:0 20px;">
      <a href="#pocetna" id="nav-brand" style="display:flex; align-items:center; gap:0; color:#ffffff;">
        <img src="${B}assets/logo.png" alt="Logo ordinacije Dr. Biočanin" width="60" height="54" style="height:26px; width:auto;">
        <span style="font-family:'Plus Jakarta Sans',sans-serif; font-weight:700; font-size:18px; letter-spacing:-0.01em; color:#ffffff; margin-top:-4px; margin-left:10px;">Dr. Biočanin</span>
      </a>
      <nav class="nav-links" style="display:flex; align-items:center; gap:34px;">
        <a href="#usluge" data-spy="usluge" style="color:#c7d3db; font-weight:500; transition:color .15s;">Usluge</a>
        <a href="#cenovnik" data-spy="cenovnik" style="color:#c7d3db; font-weight:500; transition:color .15s;">Cenovnik</a>
        <a href="#o-nama" data-spy="o-nama" style="color:#c7d3db; font-weight:500; transition:color .15s;">O nama</a>
        <a href="#kontakt" data-spy="kontakt" style="color:#c7d3db; font-weight:500; transition:color .15s;">Kako do nas</a>
        <a href="tel:0113328131" id="nav-call" class="nav-call cta-sheen" style="display:inline-flex; align-items:center; justify-content:center; gap:8px; background:#0b73c8; color:#fff; font-weight:600; padding:11px 22px; border-radius:999px; cursor:pointer; transition:background .15s;">Kontaktirajte nas</a>
      </nav>
      <button class="nav-toggle" id="nav-toggle" aria-label="Meni" style="display:none; align-items:center; justify-content:center; width:44px; height:44px; border:1px solid #274157; border-radius:8px; background:transparent; cursor:pointer;">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c7d3db" stroke-width="2" stroke-linecap="round"><line x1="4" y1="7" x2="20" y2="7"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="17" x2="20" y2="17"></line></svg>
      </button>
    </div>
  </header>

  <section id="pocetna" style="position:relative; overflow:hidden; min-height:calc(100vh - 69px); display:flex; align-items:center; padding-top:64px; padding-bottom:64px; border-top:1px solid #17384d; box-shadow:inset 0 1px 0 rgba(255,255,255,0.06); background:#ffffff;">
    <img class="hero-photo" src="${B}assets/hero.jpg" alt="Nasmejana pacijentkinja u stomatološkoj ordinaciji Dr. Biočanin" width="1600" height="897" fetchpriority="high" decoding="async" style="position:absolute; top:0; right:0; height:100%; width:auto; max-width:none; object-fit:cover; object-position:left center; z-index:0;">
    <div class="hero-veil" style="position:absolute; inset:0; z-index:1; pointer-events:none; background:linear-gradient(90deg, #ffffff 0%, rgba(255,255,255,0.92) 34%, rgba(255,255,255,0.15) 58%, rgba(255,255,255,0) 72%);"></div>
    <div class="hero-fade" style="position:absolute; left:0; right:0; bottom:0; height:160px; z-index:2; pointer-events:none; background:linear-gradient(180deg, rgba(246,249,251,0) 0%, rgba(246,249,251,0.75) 65%, #f6f9fb 100%);"></div>
    <div class="wrap" style="width:100%; position:relative; z-index:2;">
      <div class="hero-grid" style="display:grid; grid-template-columns:1fr; gap:64px; align-items:stretch;">
        <div style="max-width:560px;">
          <div style="display:inline-flex; align-items:center; gap:8px; background:#eef6fd; color:#0b73c8; font-weight:600; font-size:14px; padding:7px 14px; border-radius:999px; margin-bottom:24px;">
            <span style="width:7px; height:7px; border-radius:50%; background:#39a84e;"></span>17 godina sa vama
          </div>
          <h1 class="hero-h1" style="font-family:'Plus Jakarta Sans',sans-serif; font-weight:700; font-size:56px; line-height:1.06; letter-spacing:-0.02em; margin-bottom:22px; color:#2a4a60; text-wrap:pretty;">Briga o vašem <span style="color:#0b73c8;">osmehu</span> počinje ovde.</h1>
          <p style="font-size:19px; color:#4a5964; max-width:52ch; margin-bottom:34px; text-wrap:pretty;">Ordinacija Dr. Biočanin. Od običnog pregleda do krunice i izbeljivanja. Radimo mirno, i bez bola.</p>
          <div class="hero-cta" style="display:flex; align-items:center; gap:14px;">
            <a href="#cenovnik" class="cta-sheen" style="display:inline-flex; align-items:center; gap:10px; background:#0b73c8; color:#fff; font-weight:600; font-size:16px; padding:15px 28px; border-radius:8px; transition:background .15s, transform .15s, box-shadow .15s;">Pogledajte cenovnik</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="usluge" class="reveal" style="background:#f6f9fb; border-bottom:1px solid #e6ecf0;">
    <div class="wrap">
      <div style="max-width:600px; margin-bottom:52px;">
        <div style="font-family:'Plus Jakarta Sans',sans-serif; font-weight:600; font-size:14px; letter-spacing:0.08em; text-transform:uppercase; color:#237a3a; margin-bottom:14px;">Usluge</div>
        <h2 style="font-family:'Plus Jakarta Sans',sans-serif; font-weight:700; font-size:38px; line-height:1.12; letter-spacing:-0.02em; margin-bottom:16px;">Šta radimo</h2>
        <p style="font-size:18px; color:#4a5964; text-wrap:pretty;">Šest stvari zbog kojih ljudi najčešće dolaze. Ako niste sigurni šta vam treba, pozovite i pitajte.</p>
      </div>
      <div class="services-grid" style="display:grid; grid-template-columns:repeat(3,1fr); gap:20px;">${svcCards}</div>
      <div class="svc-dots" style="justify-content:center; gap:10px; margin-top:18px;">
        <span class="svc-dot" data-page="0" style="width:9px; height:9px; border-radius:50%; background:#0b73c8; cursor:pointer; transition:background .2s;"></span>
        <span class="svc-dot" data-page="1" style="width:9px; height:9px; border-radius:50%; background:#cdd8e0; cursor:pointer; transition:background .2s;"></span>
        <span class="svc-dot" data-page="2" style="width:9px; height:9px; border-radius:50%; background:#cdd8e0; cursor:pointer; transition:background .2s;"></span>
      </div>
    </div>
  </section>

  <section id="cenovnik" class="reveal">
    <div class="wrap">
      <div style="max-width:640px; margin:0 auto 52px; text-align:center;">
        <h2 style="font-family:'Plus Jakarta Sans',sans-serif; font-weight:700; font-size:40px; line-height:1.1; letter-spacing:-0.02em; margin-bottom:16px; color:#123246;">Cene po vrsti tretmana</h2>
        <p style="font-size:18px; color:#4a5964; text-wrap:pretty;">Tri grupe pokrivaju skoro sve zbog čega dolazite. Ovo su početne cene, tačan iznos kažemo posle pregleda.</p>
      </div>
      <div class="tier-grid" style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:22px; align-items:stretch;">
        <div class="tier-card" data-tier="0" style="display:flex; flex-direction:column; background:#f6faff; border:2px solid #0b73c8; border-radius:20px; padding:34px 32px; transition:transform .2s, box-shadow .2s;">
          <span class="tier-deco" style="width:150px; height:150px; top:-54px; right:-46px; background:rgba(11,115,200,0.06);"></span>
          <span class="tier-deco" style="width:90px; height:90px; bottom:-30px; left:-28px; background:rgba(57,168,78,0.06);"></span>
          <div style="width:52px; height:52px; border-radius:14px; background:#0b73c8; display:flex; align-items:center; justify-content:center; margin-bottom:26px;"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4c-1.3-1.2-3-1.6-4.5-1.1C5.6 3.5 4.5 5.4 4.5 7.9c0 1.7.4 3.3.9 5.1.4 1.6.6 4.5 1.8 4.5 1.1 0 1.3-2.3 1.6-4.2.3-1.5.5-2.9 1.2-2.9s.9 1.4 1.2 2.9c.3 1.9.5 4.2 1.6 4.2 1.2 0 1.4-2.9 1.8-4.5.5-1.8.9-3.4.9-5.1 0-2.5-1.1-4.4-3-4.9C15 2.4 13.3 2.8 12 4z"></path></svg></div>
          <h3 style="font-family:'Plus Jakarta Sans',sans-serif; font-weight:700; font-size:23px; letter-spacing:-0.01em; margin-bottom:18px; color:#123246;">Pregled i osnovna nega</h3>${chevBtn}
          <div style="font-family:'Plus Jakarta Sans',sans-serif; font-weight:700; font-size:38px; letter-spacing:-0.02em; color:#0b73c8; line-height:1;">od 1.500 din</div>
          <div style="font-size:14px; color:#6a7883; margin-top:8px; margin-bottom:26px;">početna cena</div>
          <div class="tier-list" style="border-top:1px solid #d6e6f5; padding-top:24px; display:flex; flex-direction:column; gap:15px;">${tierList(tier1, '#2c3a44')}</div>
        </div>
        <div class="tier-card tier-featured" data-tier="1" style="position:relative; display:flex; flex-direction:column; background:#0e2230; border:2px solid #0e2230; border-radius:20px; padding:34px 32px; box-shadow:0 20px 50px rgba(11,58,102,0.22); transition:transform .2s;">
          <span class="tier-deco" style="width:160px; height:160px; top:-58px; right:-50px; background:rgba(255,255,255,0.05);"></span>
          <span class="tier-deco" style="width:100px; height:100px; bottom:-34px; left:-30px; background:rgba(91,180,240,0.08);"></span>
          <div style="width:52px; height:52px; border-radius:14px; background:#0b73c8; display:flex; align-items:center; justify-content:center; margin-bottom:26px;"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10.5 5.2C9.4 4.2 7.9 3.9 6.7 4.3 5.2 4.8 4.3 6.4 4.3 8.5c0 1.4.3 2.8.8 4.3.3 1.4.5 3.8 1.5 3.8.9 0 1.1-2 1.3-3.6.3-1.3.4-2.5 1-2.5s.8 1.2 1 2.5c.3 1.6.4 3.6 1.4 3.6.9 0 1.2-2.4 1.5-3.8.4-1.5.7-2.9.7-4.3 0-2.1-.9-3.7-2.4-4.2-1.2-.4-2.6-.1-3.8.9z"></path><path d="M18.4 4.1l.6 1.7 1.7.6-1.7.6-.6 1.7-.6-1.7-1.7-.6 1.7-.6z"></path><path d="M20.3 9.6l.4 1.2 1.2.4-1.2.4-.4 1.2-.4-1.2-1.2-.4 1.2-.4z"></path></svg></div>
          <h3 style="font-family:'Plus Jakarta Sans',sans-serif; font-weight:700; font-size:23px; letter-spacing:-0.01em; margin-bottom:18px; color:#fff;">Estetika osmeha</h3>${chevBtn}
          <div style="font-family:'Plus Jakarta Sans',sans-serif; font-weight:700; font-size:38px; letter-spacing:-0.02em; color:#fff; line-height:1;">od 15.000 din</div>
          <div style="font-size:14px; color:#8fa1ad; margin-top:8px; margin-bottom:26px;">početna cena</div>
          <div class="tier-list" style="border-top:1px solid #1f3a4d; padding-top:24px; display:flex; flex-direction:column; gap:15px;">${tierList(tier2, '#c7d3db')}</div>
        </div>
        <div class="tier-card" data-tier="2" style="display:flex; flex-direction:column; background:#f6faff; border:2px solid #0b73c8; border-radius:20px; padding:34px 32px; transition:transform .2s, box-shadow .2s;">
          <span class="tier-deco" style="width:150px; height:150px; top:-52px; left:-48px; background:rgba(11,115,200,0.06);"></span>
          <span class="tier-deco" style="width:88px; height:88px; bottom:-28px; right:-26px; background:rgba(57,168,78,0.06);"></span>
          <div style="width:52px; height:52px; border-radius:14px; background:#0b73c8; display:flex; align-items:center; justify-content:center; margin-bottom:26px;"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8.2 4h7.6l-1.1 5H9.3z"></path><path d="M9.6 9l.7 7a1.7 1.7 0 0 0 3.4 0l.7-7"></path><line x1="9.9" y1="11.4" x2="14.1" y2="11.4"></line><line x1="10.1" y1="13.3" x2="13.9" y2="13.3"></line><line x1="10.4" y1="15.2" x2="13.6" y2="15.2"></line></svg></div>
          <h3 style="font-family:'Plus Jakarta Sans',sans-serif; font-weight:700; font-size:23px; letter-spacing:-0.01em; margin-bottom:18px; color:#123246;">Protetika i hirurgija</h3>${chevBtn}
          <div style="font-family:'Plus Jakarta Sans',sans-serif; font-weight:700; font-size:38px; letter-spacing:-0.02em; color:#0b73c8; line-height:1;">od 6.000 din</div>
          <div style="font-size:14px; color:#6a7883; margin-top:8px; margin-bottom:26px;">početna cena</div>
          <div class="tier-list" style="border-top:1px solid #d6e6f5; padding-top:24px; display:flex; flex-direction:column; gap:15px;">${tierList(tier3, '#2c3a44')}</div>
        </div>
      </div>
    </div>
  </section>

  <section id="o-nama" class="reveal" style="min-height:100vh; display:flex; align-items:center; background:#f6f9fb; border-top:1px solid #e6ecf0; border-bottom:1px solid #e6ecf0;">
    <div class="wrap" style="width:100%;">
      <div class="about-grid" style="display:grid; grid-template-columns:1fr 1.1fr; gap:56px; align-items:center; min-height:0;">
        <div style="aspect-ratio:4/5; border:1px solid #dde4e9; border-radius:12px; overflow:hidden;">
          <img src="${B}assets/doktor.jpg" alt="Dr. Biočanin, stomatolog" width="1000" height="1000" loading="lazy" decoding="async" style="width:100%; height:100%; object-fit:cover; object-position:center;">
        </div>
        <div>
          <div style="font-family:'Plus Jakarta Sans',sans-serif; font-weight:600; font-size:14px; letter-spacing:0.08em; text-transform:uppercase; color:#237a3a; margin-bottom:14px;">O nama</div>
          <h2 style="font-family:'Plus Jakarta Sans',sans-serif; font-weight:700; font-size:38px; line-height:1.12; letter-spacing:-0.02em; margin-bottom:20px; text-wrap:pretty;">Isti doktor, isto mesto, sedamnaest godina.</h2>
          <p style="font-size:18px; color:#4a5964; max-width:60ch; margin-bottom:18px; text-wrap:pretty;">Ordinacija Dr. Biočanin radi od 2009. Ista adresa, isti čovek koji vas leči. Mnogi pacijenti se vraćaju godinama i dovode celu porodicu.</p>
          <p style="font-size:18px; color:#4a5964; max-width:60ch; margin-bottom:28px; text-wrap:pretty;">Prvo objasnimo šta se dešava, pa tek onda radimo. Bez žurbe.</p>
          <div style="display:flex; align-items:center; gap:16px; flex-wrap:wrap; margin-top:28px;">
            <a href="tel:0113328131" id="zakazi-btn" class="cta-sheen" style="display:inline-flex; align-items:center; gap:9px; background:#0b73c8; color:#fff; font-weight:600; font-size:16px; padding:14px 24px; border-radius:8px; cursor:pointer; transition:background .15s, transform .15s;">Zakažite pregled</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="recenzije" class="reveal" style="background:#ffffff;">
    <div class="wrap" style="text-align:center; margin-bottom:52px;">
      <div style="font-family:'Plus Jakarta Sans',sans-serif; font-weight:600; font-size:14px; letter-spacing:0.08em; text-transform:uppercase; color:#237a3a; margin-bottom:14px;">Utisci pacijenata</div>
      <h2 style="font-family:'Plus Jakarta Sans',sans-serif; font-weight:700; font-size:38px; line-height:1.12; letter-spacing:-0.02em; color:#123246;">Pacijenti nam veruju</h2>
    </div>
    <div class="rev-viewport"><div class="rev-track">${revCards}</div></div>
  </section>

  <section id="kontakt" class="reveal" style="background:#f6f9fb; border-top:1px solid #e6ecf0;">
    <div class="wrap">
      <div class="contact-grid" style="display:grid; grid-template-columns:1fr 1.2fr; gap:56px; align-items:center;">
        <div>
          <div style="font-family:'Plus Jakarta Sans',sans-serif; font-weight:600; font-size:14px; letter-spacing:0.08em; text-transform:uppercase; color:#237a3a; margin-bottom:14px;">Kako do nas</div>
          <h2 style="font-family:'Plus Jakarta Sans',sans-serif; font-weight:700; font-size:38px; line-height:1.12; letter-spacing:-0.02em; margin-bottom:28px;">Dođite ili pozovite</h2>
          <div style="display:flex; flex-direction:column; gap:22px;">
            <div style="display:flex; gap:15px;"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0b73c8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0; margin-top:2px;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg><div><div style="font-family:'Plus Jakarta Sans',sans-serif; font-weight:600; font-size:17px;">Adresa</div><div style="font-size:16px; color:#546069;">Ranka Miljića 81, Borča, Beograd</div></div></div>
            <div style="display:flex; gap:15px;">${phoneSvg('#0b73c8', 22).replace('style="flex-shrink:0','')}<div><div style="font-family:'Plus Jakarta Sans',sans-serif; font-weight:600; font-size:17px;">Telefon</div><a href="tel:0113328131" style="font-size:16px;">011 3328131</a></div></div>
            <div style="display:flex; gap:15px;"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0b73c8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0; margin-top:2px;"><circle cx="12" cy="12" r="9"></circle><polyline points="12 7 12 12 15 14"></polyline></svg><div><div style="font-family:'Plus Jakarta Sans',sans-serif; font-weight:600; font-size:17px;">Radno vreme</div><div style="font-size:16px; color:#546069;">Svaki radni dan od 09 do 19h</div></div></div>
          </div>
        </div>
        <a href="https://www.google.com/maps/search/?api=1&query=Ranka+Milji%C4%87a+81,+Bor%C4%8Da,+Beograd" target="_blank" rel="noopener" style="position:relative; display:block; aspect-ratio:16/11; border:1px solid #dde4e9; border-radius:12px; overflow:hidden;">
          <iframe title="Mapa - Ranka Miljića 81, Borča" src="https://www.google.com/maps?q=Ranka%20Milji%C4%87a%2081%2C%20Bor%C4%8Da%2C%20Beograd&output=embed" style="width:100%; height:100%; border:0; display:block; pointer-events:none; filter:grayscale(0.4) sepia(0.35) hue-rotate(165deg) saturate(1.4) brightness(1.02);" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div style="position:absolute; top:50%; left:50%; transform:translate(-50%,-78%); pointer-events:none; filter:drop-shadow(0 4px 6px rgba(0,0,0,0.35));"><svg width="56" height="70" viewBox="0 0 46 58" fill="none"><path d="M23 2C11.4 2 2 11.4 2 23c0 15 21 33 21 33s21-18 21-33C44 11.4 34.6 2 23 2z" fill="#0b73c8" stroke="#fff" stroke-width="2.5"></path><g transform="translate(12.7,13) scale(0.98)"><path d="M12 4c-1.3-1.2-3-1.6-4.5-1.1C5.6 3.5 4.5 5.4 4.5 7.9c0 1.7.4 3.3.9 5.1.4 1.6.6 4.5 1.8 4.5 1.1 0 1.3-2.3 1.6-4.2.3-1.5.5-2.9 1.2-2.9s.9 1.4 1.2 2.9c.3 1.9.5 4.2 1.6 4.2 1.2 0 1.4-2.9 1.8-4.5.5-1.8.9-3.4.9-5.1 0-2.5-1.1-4.4-3-4.9C15 2.4 13.3 2.8 12 4z" fill="#fff"></path></g></svg></div>
          <div style="position:absolute; left:16px; bottom:16px; display:inline-flex; align-items:center; gap:8px; background:#0b73c8; color:#fff; font-family:'Plus Jakarta Sans',sans-serif; font-weight:600; font-size:14px; padding:9px 15px; border-radius:8px; box-shadow:0 4px 12px rgba(0,0,0,0.18);"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>Otvori u Google mapama</div>
        </a>
      </div>
    </div>
  </section>

  <footer style="background:#0e2230; color:#c7d3db;">
    <div class="footer-wrap" style="max-width:none; width:100%; margin:0; padding:44px 20px; display:flex; align-items:center; justify-content:space-between; gap:20px; flex-wrap:wrap;">
      <div class="footer-brand" style="display:flex; align-items:center; gap:0;">
        <img src="${B}assets/logo.png" alt="Logo" width="60" height="54" style="height:31px; width:auto;">
        <div class="footer-name"><div style="font-family:'Plus Jakarta Sans',sans-serif; font-weight:700; font-size:16px; color:#fff;">Dr. Biočanin</div><div style="font-size:14px; color:#8fa1ad;">Stomatološka ordinacija, Borča</div></div>
      </div>
      <div class="footer-copy" style="font-size:14px; color:#8fa1ad; text-align:right; margin-right:30px;">© 2009 Ordinacija Dr. Biočanin</div>
    </div>
  </footer>
</div>`;
