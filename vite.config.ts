import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',                   // 🔴 important: assets en chemin absolu
  build: {
    outDir: 'dist/client'
  }
});