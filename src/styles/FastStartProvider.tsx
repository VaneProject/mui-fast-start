import {createContext} from "react";
import type {FastStartDefaultProps, FastStartProviderProps} from "@/types";
import {type Theme, ThemeProvider} from "@mui/material";
import createDefaultProps from './createDefaultProps';

export const FastStartContext = createContext<FastStartDefaultProps>(createDefaultProps());

const FastStartProvider = <T = Theme>(props: FastStartProviderProps<T>) => {
    const {
        defaultProps,
        ...themeProps
    } = props;

    return (
        <FastStartContext value={defaultProps}>
            <ThemeProvider {...themeProps}/>
        </FastStartContext>
    )
}

export default FastStartProvider;
