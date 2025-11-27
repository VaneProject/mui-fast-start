import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

const libRoot = resolve(__dirname, '../../src');

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'mui-fast-start/styles': resolve(libRoot, 'styles/index.ts'),
      'mui-fast-start/hooks': resolve(libRoot, 'hooks/index.ts'),
      'mui-fast-start/types': resolve(libRoot, 'types/index.ts'),
      'mui-fast-start': resolve(libRoot, 'components/index.ts'),
      
      '@': libRoot,
      '@components': resolve(libRoot, 'components'),
      '@hooks': resolve(libRoot, 'hooks'),
      '@styles': resolve(libRoot, 'styles'),
      '@types': resolve(libRoot, 'types'),
      '@utils': resolve(libRoot, 'utils'),
    }
  },
  optimizeDeps: {
    exclude: ['mui-fast-start']
  }
})
