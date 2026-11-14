import { readFile, access } from 'node:fs/promises';
const html = await readFile('dist/index.html', 'utf8');
const ids = new Set([...html.matchAll(/id="([^"]+)"/g)].map(m => m[1]));
const links = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map(m => m[1]);
for (const link of links) {
  if (link.startsWith('#') && !ids.has(link.slice(1))) throw Error(`Missing anchor ${link}`);
  if (link.startsWith('/')) await access(`dist${link}`);
}
for (const file of ['/', '/styles.css', '/app.js', '/assets/anirudh-portrait.png', '/assets/Anirudh-Reddy-Resume.pdf', '/assets/favicon.svg']) {
  const response = await fetch(`http://127.0.0.1:3000${file}`);
  if (!response.ok) throw Error(`${file}: ${response.status}`);
  console.log(`${response.status} ${file} (${response.headers.get('content-type')})`);
}
console.log('All local assets and internal anchors verified.');
