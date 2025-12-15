import {createContext} from "react";
import {ThemeProvider} from "@mui/material";
import type {DefaultTheme} from "@mui/system";
import {createDefaultProps} from "./createDefaultProps";
import {FastStartDefaultProps, FastStartProviderProps} from "../types";


const FastStartContext = createContext<FastStartDefaultProps>(createDefaultProps());

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
