import {createContext} from "react";
import type {FastStartDefaultProps, FastStartProviderProps} from "@/types";
import {ThemeProvider} from "@mui/material";
import createDefaultProps from './createDefaultProps';
import type {DefaultTheme} from "@mui/system";

export const FastStartContext = createContext<FastStartDefaultProps>(createDefaultProps());

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

export default FastStartProvider;
