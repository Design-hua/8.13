import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/8.13/', // 👈 修复 GitHub Pages 子路径
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
