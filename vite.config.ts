import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
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
