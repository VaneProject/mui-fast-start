import React, {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createTheme, CssBaseline} from "@mui/material";
import { createDefaultProps } from 'mui-fast-start/styles';
import { FastStartProvider } from 'mui-fast-start';

const theme = createTheme();
const defaultProps = createDefaultProps({
    Single: {
        Float: {
            variant: 'filled',
            size: 'medium',
            fullWidth: false,
            autoComplete: 'off',
            inputMode: 'decimal',
            type: 'text',
            step: 0.01,
            def: 0
        },
        Integer: {
            variant: 'filled',
            size: 'medium',
            fullWidth: false,
            autoComplete: 'off',
            inputMode: 'numeric',
            type: 'text',
            step: 1,
            def: 0
        }
    },
    Obj: {
        Float: {
            variant: 'filled',
            size: 'medium',
            fullWidth: false,
            autoComplete: 'off',
            inputMode: 'decimal',
            type: 'text',
            step: 0.01,
            def: 0
        }
    }
});

createRoot(document.getElementById('root')!).render(
    <FastStartProvider
        defaultProps={defaultProps}
        theme={theme}
        defaultMode='dark'
    >
        <CssBaseline/>
        <StrictMode>
            <App/>
        </StrictMode>
    </FastStartProvider>
)
