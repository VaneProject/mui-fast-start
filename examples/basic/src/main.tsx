import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createTheme, CssBaseline} from "@mui/material";
import {FastStartProvider} from "mui-fast-start";
import {createMfsProps} from "../../../src/styles/FastStartProps.ts";

const mfsProps = createMfsProps({});
const theme = createTheme({
    components: {
        MuiFormControl: {
            defaultProps: {
                size: 'small',
                fullWidth: true
            }
        },
        MuiSelect: {
            defaultProps: {
                size: 'small',
                fullWidth: true
            }
        }
    }
});


createRoot(document.getElementById('root')!).render(
    <FastStartProvider
        defaultProps={mfsProps}
        theme={theme}
        defaultMode='dark'
    >
        <CssBaseline/>
        <StrictMode>
            <App/>
        </StrictMode>
    </FastStartProvider>
)
