import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

// Base relativa: CSS/JS se cargan del mismo origen que la página (evita CORS si
// el sitio se sirve por ecoglobe.com.mx y www.ecoglobe.mx u otros alias).
export default defineConfig({
  plugins: [react()],
  base: '/',
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['import'],
        quietDeps: true
      }
    }
  },
  build: {
    outDir: 'dist'
  },
  esbuild: {
    jsx: 'automatic',
    loader: 'jsx',
    include: /src\/.*\.[jt]sx?$/
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


