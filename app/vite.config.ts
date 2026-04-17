import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/stitch_lovematch_ui_ux_design/',
  plugins: [react()],
  build: {
    outDir: '..',
    emptyOutDir: false,
    assetsDir: 'assets',
  },
});
