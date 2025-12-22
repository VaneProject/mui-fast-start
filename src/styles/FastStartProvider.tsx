import {createContext} from "react";
import {ThemeProvider} from "@mui/material";
import type {DefaultTheme} from "@mui/system";
import {createMfsProps, FastStartProps, FastStartProviderProps} from "./FastStartProps.ts";


const FastStartContext = createContext<Partial<FastStartProps>>(createMfsProps({}));

const FastStartProvider = <T = DefaultTheme>(props: FastStartProviderProps<T>) => {
    const {
        defaultProps,
        ...themeProps
    } = props;

    return (
        <FastStartContext value={defaultProps}>
            <ThemeProvider<T> {...themeProps}/>
        </FastStartContext>
    )
}

export {
    FastStartContext,
    FastStartProvider
}
