import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/8.13/', // 关键：告诉 Vite 构建资源路径
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
