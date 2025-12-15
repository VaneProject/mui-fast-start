import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
    },
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
            name: 'MuiFastStart',
            fileName: 'index',
            formats: ['es']
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
