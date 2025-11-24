import React, {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";

const theme = createTheme();

createRoot(document.getElementById('root')!).render(
    <ThemeProvider theme={theme} defaultMode='dark'>
        <CssBaseline/>
        <StrictMode>
            <App/>
        </StrictMode>
    </ThemeProvider>
)
