import { mkdir, cp, copyFile } from 'node:fs/promises';
await mkdir('dist', { recursive: true });
for (const file of ['index.html', 'styles.css', 'app.js']) await copyFile(file, `dist/${file}`);
await cp('public', 'dist', { recursive: true });
console.log('Built portfolio in dist/');
