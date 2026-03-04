import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'https://blogger-backend-c8c6.onrender.com',
        changeOrigin: true,
      },
    },
  },
});
