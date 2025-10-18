import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/task/my-template/', // <- match the final path you want
  plugins: [react()],
});
