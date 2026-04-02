import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  base: 'https://www.ecoglobe.mx/',
  build: {
    outDir: 'dist'
  },
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.js$/
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    },
    extensions: ['.js', '.jsx', '.json']
  },
  server: {
    hmr: {
      overlay: true
    }
  }
});


