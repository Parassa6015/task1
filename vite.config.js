import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/task1/', // <- set to the repo name so GH Pages serves assets from /task1/
  plugins: [react()],
});
