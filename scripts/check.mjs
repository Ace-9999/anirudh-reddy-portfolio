import { readFile } from 'node:fs/promises';

const origin = 'http://127.0.0.1:3000';
const pages = new Map();
for (const name of ['index.html', 'projects.html']) {
  const html = await readFile('dist/' + name, 'utf8');
  pages.set('/' + name, {
    ids: new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1])),
    links: [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map(match => match[1])
  });
}
const paths = new Set(['/','/projects.html']);
for (const [name, page] of pages) {
  for (const link of page.links) {
    const url = new URL(link, origin + name);
    if (url.origin !== origin) continue;
    const target = url.pathname === '/' ? '/index.html' : url.pathname;
    if (url.hash && !pages.get(target)?.ids.has(url.hash.slice(1))) {
      throw Error('Missing anchor ' + link + ' on ' + name);
    }
    paths.add(url.pathname);
  }
}
const css = await readFile('dist/styles.css', 'utf8');
for (const match of css.matchAll(/url\(['"]?(\/assets\/[^'")]+)/g)) paths.add(match[1]);
for (const path of paths) {
  const response = await fetch(origin + path);
  if (!response.ok) throw Error(path + ' returned ' + response.status);
  await response.arrayBuffer();
}
console.log('Verified both pages, their anchors, and ' + paths.size + ' served paths.');
