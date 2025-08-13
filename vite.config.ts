import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/8.13/', // 这里就是你的 GitHub 仓库名
});
