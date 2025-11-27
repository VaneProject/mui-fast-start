import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            '@components': resolve(__dirname, 'src/components'),
            '@hooks': resolve(__dirname, 'src/hooks'),
            '@styles': resolve(__dirname, 'src/styles'),
            '@types': resolve(__dirname, 'src/types'),
            '@utils': resolve(__dirname, 'src/utils'),
        }
    },
    build: {
        lib: {
            entry: resolve(__dirname, 'src/components/index.ts'),
            name: 'MuiFastStart',
            fileName: (format) => format === 'es' ? 'index.esm.js' : 'index.cjs.js',
            formats: ['es', 'cjs']
        },
        rolldownOptions: {
            external: [
                'react',
                'react-dom',
                'react/jsx-runtime',
                '@mui/material',
                '@emotion/react',
                '@emotion/styled'
            ],
            output: {
                globals: {
                    'react': 'React',
                    'react-dom': 'ReactDOM',
                    '@mui/material': 'MaterialUI'
                }
            }
        }
    },
})
