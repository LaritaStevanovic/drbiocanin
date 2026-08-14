// SSG prerender: ubaci statički HTML u dist/index.html posle `vite build` (client) + `vite build --ssr`.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbs = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbs('dist/index.html'), 'utf-8');
const { render } = await import('./dist-server/entry-server.js');
const appHtml = render();
const html = template.replace('<!--app-html-->', appHtml);
fs.writeFileSync(toAbs('dist/index.html'), html);
console.log('✓ Prerendered dist/index.html');
