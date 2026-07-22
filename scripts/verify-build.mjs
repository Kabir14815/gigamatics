import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const html = readFileSync('dist/index.html', 'utf8');

if (html.includes('/src/main.jsx')) {
  console.error('Build verification failed: dist/index.html still references source files.');
  console.error('Netlify must publish the dist/ folder, not the repo root.');
  process.exit(1);
}

if (!html.includes('/assets/') || !html.includes('.js')) {
  console.error('Build verification failed: dist/index.html has no bundled JS asset.');
  process.exit(1);
}

const jsFiles = readdirSync('dist/assets').filter((f) => f.endsWith('.js'));
if (!jsFiles.length) {
  console.error('Build verification failed: no JS files in dist/assets/.');
  process.exit(1);
}

console.log('Build verified:', join('assets', jsFiles[0]));
