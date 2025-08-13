import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/8.13/', // 🔹 关键：修正 GitHub Pages 资源路径
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
