// Sve interakcije (meni, modali, carousel, scroll-spy, splash). Poziva se posle hidratacije.
const services = [
  { title: "Opšta stomatologija", desc: "Pregled, čišćenje kamenca i plomba. Ono zbog čega većina i dolazi kod zubara.", icon: "M12 4.2C10.6 2.8 8.7 2.3 7.2 3 5.6 3.7 4.7 5.5 4.7 7.6c0 1.8.5 3.4 1 5.1.4 1.6.6 4.3 1.8 4.3 1.1 0 1.3-2.1 1.6-3.9.3-1.4.5-2.7 1.1-2.7s.8 1.3 1.1 2.7c.3 1.8.5 3.9 1.6 3.9 1.2 0 1.4-2.7 1.8-4.3.5-1.7 1-3.3 1-5.1 0-2.1-.9-3.9-2.5-4.6-1.5-.7-3.4-.2-4.8 1.2z" },
  { title: "Estetska stomatologija", desc: "Izbeljivanje i fasete. Kad je zub zdrav ali hoćete da lepše izgleda.", icon: "M10 4l1.6 4.2L16 10l-4.4 1.8L10 16l-1.6-4.2L4 10l4.4-1.8z M17.5 13l.7 1.9 1.9.7-1.9.7-.7 1.9-.7-1.9-1.9-.7 1.9-.7z" },
  { title: "Vađenje i oralna hirurgija", desc: "Umnjaci i zubi koji se više ne mogu spasti. Radimo pod lokalnom anestezijom.", icon: "M9 3l1.4 8.4 M15 3l-1.4 8.4 M10.4 11.4h3.2l-.6 8.6h-2z" },
  { title: "Dečja stomatologija", desc: "Mlečni zubi i prvi pregledi. Bez žurbe, da dete ne dobije strah od zubara.", icon: "M12 20s-6.5-4.4-8.5-8.3C2 8.8 3.6 6 6.4 6c1.7 0 3 .9 3.6 2 .6-1.1 1.9-2 3.6-2 2.8 0 4.4 2.8 2.9 5.7C18.5 15.6 12 20 12 20z" },
  { title: "Lečenje kanala korena", desc: "Kad karijes dođe do živca. Očistimo kanal i zapušimo, da zadržite svoj zub.", icon: "M12 3.5c3 3.6 5 6 5 8.5a5 5 0 0 1-10 0c0-2.5 2-4.9 5-8.5z" },
  { title: "Protetika", desc: "Krunice, mostovi i proteze. Kad fali zub ili je previše oštećen za plombu.", icon: "M4 8.5l3.5 2.5L12 5l4.5 6L20 8.5 18 17.5H6z M6.4 20.5h11.2" }
];
const tiers = [
  { title: "Pregled i osnovna nega", price: "od 1.500 din", dark: false, icon: "M12 4c-1.3-1.2-3-1.6-4.5-1.1C5.6 3.5 4.5 5.4 4.5 7.9c0 1.7.4 3.3.9 5.1.4 1.6.6 4.5 1.8 4.5 1.1 0 1.3-2.3 1.6-4.2.3-1.5.5-2.9 1.2-2.9s.9 1.4 1.2 2.9c.3 1.9.5 4.2 1.6 4.2 1.2 0 1.4-2.9 1.8-4.5.5-1.8.9-3.4.9-5.1 0-2.5-1.1-4.4-3-4.9C15 2.4 13.3 2.8 12 4z", features: ["Stomatološki pregled i savet","Čišćenje kamenca i poliranje","Bela (estetska) plomba","Vađenje zuba bez bola","Za redovne kontrole i decu"] },
  { title: "Estetika osmeha", price: "od 15.000 din", dark: true, icon: "M10.5 5.2C9.4 4.2 7.9 3.9 6.7 4.3 5.2 4.8 4.3 6.4 4.3 8.5c0 1.4.3 2.8.8 4.3.3 1.4.5 3.8 1.5 3.8.9 0 1.1-2 1.3-3.6.3-1.3.4-2.5 1-2.5s.8 1.2 1 2.5c.3 1.6.4 3.6 1.4 3.6.9 0 1.2-2.4 1.5-3.8.4-1.5.7-2.9.7-4.3 0-2.1-.9-3.7-2.4-4.2-1.2-.4-2.6-.1-3.8.9z", features: ["Izbeljivanje u ordinaciji","Fasete za oblik i boju","Estetske plombe u boji zuba","Popravka polomljenog zuba","Za lepši i svetliji osmeh"] },
  { title: "Protetika i hirurgija", price: "od 6.000 din", dark: false, icon: "M8.2 4h7.6l-1.1 5H9.3z M9.6 9l.7 7a1.7 1.7 0 0 0 3.4 0l.7-7", features: ["Lečenje kanala korena","Krunice i mostovi","Pokretne i totalne proteze","Oralna hirurgija","Za kompletnu obnovu zuba"] }
];
const isMobile = () => window.matchMedia('(max-width: 768px)').matches;
const phoneSvg = (c,w) => `<svg width="${w}" height="${w}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`;
const closeSvg = (c) => `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round"><line x1="6" y1="6" x2="18" y2="18"></line><line x1="18" y1="6" x2="6" y2="18"></line></svg>`;

function overlay(inner) {
  const o = document.createElement('div');
  o.style.cssText = 'position:fixed; inset:0; z-index:200; display:flex; align-items:center; justify-content:center; padding:24px; background:rgba(11,34,52,0.45); backdrop-filter:blur(4px); -webkit-backdrop-filter:blur(4px);';
  o.innerHTML = inner;
  o.addEventListener('click', () => o.remove());
  o.firstElementChild.addEventListener('click', e => e.stopPropagation());
  document.body.appendChild(o);
  return o;
}

export function init() {
  // Splash
  const hide = () => { const s = document.getElementById('splash'); if (s) s.classList.add('done'); };
  if (document.readyState === 'complete') setTimeout(hide, 400);
  else window.addEventListener('load', () => setTimeout(hide, 300));
  setTimeout(hide, 4000);

  const navH = 68;

  // Contact modal
  const contactHTML = `<div style="position:relative; width:100%; max-width:420px; background:rgba(255,255,255,0.9); backdrop-filter:blur(14px); -webkit-backdrop-filter:blur(14px); border:1px solid rgba(255,255,255,0.6); border-radius:14px; padding:34px 32px; box-shadow:0 20px 60px rgba(11,34,52,0.28);">
    <button data-close style="position:absolute; top:14px; right:14px; width:34px; height:34px; display:flex; align-items:center; justify-content:center; border:none; background:transparent; cursor:pointer; border-radius:8px;">${closeSvg('#4a5964')}</button>
    <div style="font-family:'Plus Jakarta Sans',sans-serif; font-weight:700; font-size:22px; color:#123246; margin-bottom:22px;">Kontaktirajte nas</div>
    <div style="display:flex; flex-direction:column; gap:18px;">
      <div style="display:flex; gap:13px; align-items:flex-start;">${phoneSvg('#0b73c8',20)}<div><div style="font-size:13px; color:#6a7883; margin-bottom:2px;">Telefon</div><a href="tel:0113328131" style="font-size:17px; font-weight:600; color:#0b73c8;">011 3328131</a></div></div>
      <div style="display:flex; gap:13px; align-items:flex-start;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0b73c8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg><div><div style="font-size:13px; color:#6a7883; margin-bottom:2px;">Adresa</div><div style="font-size:16px; font-weight:600; color:#16202a;">Ranka Miljića 81, Borča</div></div></div>
      <div style="display:flex; gap:13px; align-items:flex-start;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0b73c8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><polyline points="12 7 12 12 15 14"></polyline></svg><div><div style="font-size:13px; color:#6a7883; margin-bottom:2px;">Radno vreme</div><div style="font-size:16px; font-weight:600; color:#16202a;">Svaki radni dan 09-19h</div></div></div>
    </div></div>`;
  const openContact = (e) => { if (e) e.preventDefault(); const o = overlay(contactHTML); o.querySelector('[data-close]').addEventListener('click', () => o.remove()); };

  const navCall = document.getElementById('nav-call');
  if (navCall) navCall.addEventListener('click', openContact);
  const zakazi = document.getElementById('zakazi-btn');
  if (zakazi) zakazi.addEventListener('click', (e) => { if (isMobile()) return; openContact(e); });

  // Mobile drawer menu
  const toggle = document.getElementById('nav-toggle');
  const drawerLink = (id, label) => `<a href="#${id}" data-nav="${id}" style="padding:15px 0; color:#c7d3db; font-weight:500; font-size:17px; border-bottom:1px solid #1b3547;">${label}</a>`;
  const currentSection = () => {
    const y = window.scrollY + 120; let a = ids[0];
    for (const id of ids) { const el = document.getElementById(id); if (el && el.offsetTop <= y) a = id; }
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) a = ids[ids.length - 1];
    return a;
  };
  const openMenu = () => {
    const cur = currentSection();
    const o = overlay(`<div style="position:absolute; top:0; right:0; height:100%; width:78%; max-width:320px; background:#0e2230; box-shadow:-12px 0 40px rgba(0,0,0,0.35); display:flex; flex-direction:column; padding:22px 24px; animation:drawerIn .28s ease;">
      <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:24px;"><span style="font-family:'Plus Jakarta Sans',sans-serif; font-weight:700; font-size:16px; color:#fff;">Meni</span><button data-close style="width:40px; height:40px; display:flex; align-items:center; justify-content:center; border:1px solid #274157; border-radius:8px; background:transparent; cursor:pointer;">${closeSvg('#c7d3db')}</button></div>
      ${drawerLink('usluge','Usluge')}${drawerLink('cenovnik','Cenovnik')}${drawerLink('o-nama','O nama')}${drawerLink('kontakt','Kako do nas')}
      <a href="tel:0113328131" class="nav-call cta-sheen" style="margin-top:24px; display:flex; align-items:center; justify-content:center; gap:8px; background:#0b73c8; color:#fff; font-weight:600; font-size:16px; padding:14px 20px; border-radius:999px;">Pozovite 011 3328131</a>
    </div>`);
    o.querySelector('[data-close]').addEventListener('click', () => o.remove());
    o.querySelectorAll('[data-nav]').forEach(a => {
      if (a.getAttribute('data-nav') === cur) { a.style.color = '#5db4f0'; a.style.fontWeight = '700'; }
      a.addEventListener('click', () => {
        o.querySelectorAll('[data-nav]').forEach(x => { x.style.color = '#c7d3db'; x.style.fontWeight = '500'; });
        a.style.color = '#5db4f0'; a.style.fontWeight = '700';
        setTimeout(() => o.remove(), 130);
      });
    });
  };
  if (toggle) toggle.addEventListener('click', openMenu);

  // Service modal (mobile)
  document.querySelectorAll('.svc-card').forEach(card => {
    card.addEventListener('click', () => {
      if (!isMobile()) return;
      const s = services[parseInt(card.getAttribute('data-idx'), 10)];
      const o = overlay(`<div style="position:relative; width:100%; max-width:420px; background:rgba(255,255,255,0.92); backdrop-filter:blur(14px); border:1px solid rgba(255,255,255,0.6); border-radius:14px; padding:32px 30px; box-shadow:0 20px 60px rgba(11,34,52,0.28);">
        <button data-close style="position:absolute; top:14px; right:14px; width:34px; height:34px; display:flex; align-items:center; justify-content:center; border:none; background:transparent; cursor:pointer; border-radius:8px;">${closeSvg('#4a5964')}</button>
        <div style="width:52px; height:52px; border-radius:12px; background:#eafaef; display:flex; align-items:center; justify-content:center; margin-bottom:20px;"><svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#2f9a45" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="${s.icon}"></path></svg></div>
        <div style="font-family:'Plus Jakarta Sans',sans-serif; font-weight:700; font-size:22px; color:#123246; margin-bottom:12px;">${s.title}</div>
        <p style="font-size:16px; color:#546069; line-height:1.6;">${s.desc}</p>
        <a href="tel:0113328131" style="margin-top:24px; display:flex; align-items:center; justify-content:center; gap:8px; background:#0b73c8; color:#fff; font-weight:600; font-size:16px; padding:14px 20px; border-radius:8px;">${phoneSvg('#fff',17)}Zakažite termin</a></div>`);
      o.querySelector('[data-close]').addEventListener('click', () => o.remove());
    });
  });

  // Tier modal (mobile)
  document.querySelectorAll('.tier-card').forEach(card => {
    card.addEventListener('click', () => {
      if (!isMobile()) return;
      const t = tiers[parseInt(card.getAttribute('data-tier'), 10)];
      const bg = t.dark ? '#0e2230' : 'rgba(255,255,255,0.94)';
      const border = t.dark ? '#1f3a4d' : 'rgba(255,255,255,0.6)';
      const titleCol = t.dark ? '#fff' : '#123246';
      const accent = t.dark ? '#5db4f0' : '#0b73c8';
      const nameCol = t.dark ? '#c7d3db' : '#2c3a44';
      const closeCol = t.dark ? '#c7d3db' : '#4a5964';
      const rows = t.features.map(f => `<div style="display:flex; gap:12px; align-items:flex-start;"><span style="width:22px; height:22px; border-radius:50%; background:#0b73c8; display:flex; align-items:center; justify-content:center; flex-shrink:0; margin-top:1px;"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span><span style="font-size:15px; color:${nameCol};">${f}</span></div>`).join('');
      const o = overlay(`<div style="position:relative; width:100%; max-width:420px; background:${bg}; backdrop-filter:blur(14px); border:1px solid ${border}; border-radius:14px; padding:32px 30px; box-shadow:0 20px 60px rgba(11,34,52,0.28);">
        <button data-close style="position:absolute; top:14px; right:14px; width:34px; height:34px; display:flex; align-items:center; justify-content:center; border:none; background:transparent; cursor:pointer; border-radius:8px;">${closeSvg(closeCol)}</button>
        <div style="width:52px; height:52px; border-radius:12px; background:#0b73c8; display:flex; align-items:center; justify-content:center; margin-bottom:20px;"><svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="${t.icon}"></path></svg></div>
        <div style="font-family:'Plus Jakarta Sans',sans-serif; font-weight:700; font-size:22px; color:${titleCol}; margin-bottom:4px;">${t.title}</div>
        <div style="font-family:'Plus Jakarta Sans',sans-serif; font-weight:700; font-size:18px; color:${accent}; margin-bottom:20px;">${t.price}</div>
        <div style="display:flex; flex-direction:column; gap:14px;">${rows}</div></div>`);
      o.querySelector('[data-close]').addEventListener('click', () => o.remove());
    });
  });

  // Carousel dots (mobile)
  const grid = document.querySelector('.services-grid');
  if (grid) {
    const sizeCards = () => { if (!isMobile()) return; const w = Math.floor((grid.clientWidth - 30) / 2); Array.from(grid.children).forEach(c => c.style.width = w + 'px'); };
    sizeCards();
    const dots = () => Array.from(document.querySelectorAll('.svc-dot'));
    const sync = () => { const max = grid.scrollWidth - grid.clientWidth; const p = max <= 0 ? 0 : Math.round((grid.scrollLeft / max) * 2); dots().forEach((d, i) => d.style.background = i === p ? '#0b73c8' : '#cdd8e0'); };
    grid.addEventListener('scroll', () => requestAnimationFrame(sync), { passive: true });
    dots().forEach(d => d.addEventListener('click', () => { const max = grid.scrollWidth - grid.clientWidth; grid.scrollTo({ left: (max * parseInt(d.getAttribute('data-page'),10)) / 2, behavior: 'smooth' }); }));
    window.addEventListener('resize', () => { sizeCards(); sync(); });
    sync();
  }

  // Reveal on scroll
  const io = new IntersectionObserver((entries) => { entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Smooth scroll + scroll-spy
  const ids = ['usluge','cenovnik','o-nama','kontakt'];
  const navLinks = () => Array.from(document.querySelectorAll('[data-spy]'));
  let lock = null;
  const scrollTo = (id) => { const el = document.getElementById(id); if (!el) return; const top = el.getBoundingClientRect().top + window.scrollY - navH; window.scrollTo({ top: Math.max(0, Math.round(top)), behavior: 'smooth' }); history.replaceState(null, '', '#' + id); };
  navLinks().forEach(a => a.addEventListener('click', (ev) => { ev.preventDefault(); const id = a.getAttribute('data-spy'); scrollTo(id); lock = id; spy(); }));
  const brand = document.getElementById('nav-brand');
  if (brand) brand.addEventListener('click', (e) => { e.preventDefault(); if (location.hash) history.replaceState(null, '', location.pathname + location.search); window.scrollTo({ top: 0, behavior: 'smooth' }); });
  function spy() {
    const y = window.scrollY + 120;
    let active = null;
    for (const id of ids) { const el = document.getElementById(id); if (el && el.offsetTop <= y) active = id; }
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) active = ids[ids.length - 1];
    if (lock) { const t = document.getElementById(lock); if (t && Math.abs(t.offsetTop - (window.scrollY + 120)) < 40) lock = null; else active = lock; }
    navLinks().forEach(a => { const on = a.getAttribute('data-spy') === active; a.style.color = on ? '#5db4f0' : '#c7d3db'; a.style.fontWeight = on ? '700' : '500'; });
    if (window.scrollY < 80) { if (location.hash) history.replaceState(null, '', location.pathname + location.search); }
    else if (active) history.replaceState(null, '', '#' + active);
  }
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  if (location.hash) history.replaceState(null, '', location.pathname + location.search);
  window.addEventListener('scroll', spy, { passive: true });
  spy();
}
