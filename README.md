# Dr. Biočanin – Vite + React (SSG)

Statički generisan (prerender) React sajt. HTML se servira gotov (bez čekanja na JS), pa je mobilni Performance visok; JavaScript samo „oživi" interakcije (meni, moduli, carousel, scroll-spy).

## Pokretanje

```bash
cd react-app
npm install
npm run dev        # lokalni razvoj na http://localhost:5173
```

## Build za produkciju (statički HTML)

```bash
npm run build      # pravi dist/ sa prerenderovanim index.html
npm run preview    # lokalna provera build-a
```

`npm run build` radi tri koraka:
1. `vite build` – klijentski bundle
2. `vite build --ssr` – server render bundle
3. `node prerender.js` – ubaci gotov HTML u `dist/index.html`

## Hostovanje

Sadržaj foldera **`dist/`** je statički sajt — okači ga na GitHub Pages, Netlify, Vercel ili bilo koji hosting. Za GitHub Pages: push-uj `dist/` (ili podesi Action da builduje).

## Struktura

- `index.html` – HTML ljuska sa SEO/meta/JSON-LD
- `src/markup.js` – sav sadržaj i markup (tekst, cene, usluge, recenzije)
- `src/interactions.js` – sve interakcije
- `src/styles.css` – stilovi
- `public/assets/` – slike (logo, hero, doktor)

## Izmene sadržaja

Tekst, cene i usluge menjaj u `src/markup.js` (i `src/interactions.js` za modale). Slike zameni u `public/assets/`.
