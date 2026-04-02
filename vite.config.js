import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

const productionBase = 'https://www.ecoglobe.mx/';

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? productionBase : '/',
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
}));


