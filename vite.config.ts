import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'lucide-react': path.resolve(__dirname, './node_modules/lucide-react')
    }
  },
  optimizeDeps: {
    include: ['lucide-react'],
    exclude: []
  },
  build: {
    commonjsOptions: {
      include: [/lucide-react/, /node_modules/]
    }
  }
});
