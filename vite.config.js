import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Dev + Netlify: base "/"
// GitHub Pages: VITE_BASE=/gigamatics/ npm run build
const base = process.env.VITE_BASE ?? '/';

export default defineConfig({
  base,
  plugins: [react()],
  server: { port: 3000, open: true },
});
