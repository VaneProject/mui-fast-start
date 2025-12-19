import {
    MfsObjectCheckboxProps,
    MfsObjectCheckIconProps,
    MfsObjectNumberProps,
    MfsObjectTextProps,
    MfsSingleCheckboxProps,
    MfsSingleCheckIconProps,
    MfsSingleNumberProps,
    MfsSingleSelectOneProps,
    MfsSingleTextProps
} from "../types";
import type {ThemeProviderProps} from "@mui/material";

interface FastStartProps {
    Single: Partial<{
        MfsFloat: Partial<MfsSingleNumberProps>,
        MfsInteger: Partial<MfsSingleNumberProps>,
        MfsText: Partial<MfsSingleTextProps>,
        MfsCheckbox: Partial<MfsSingleCheckboxProps>,
        MfsCheckIcon: Partial<MfsSingleCheckIconProps>,
        MfsSelectOne: Partial<MfsSingleSelectOneProps<unknown>>,
    }>,
    Object: Partial<{
        MfsFloat: Partial<MfsObjectNumberProps<object>>,
        MfsInteger: Partial<MfsObjectNumberProps<object>>,
        MfsText: Partial<MfsObjectTextProps<object>>,
        MfsCheckbox: Partial<MfsObjectCheckboxProps<object>>,
        MfsCheckIcon: Partial<MfsObjectCheckIconProps<object>>,
    }>
}

const createMfsDefaultProps = (): FastStartProps => ({
    Single: {
        MfsFloat: {
            inputMode: 'decimal',
            type: 'text',
            step: 0.01,
            def: 0
        },
        MfsInteger: {
            inputMode: 'numeric',
            type: 'text',
            step: 1,
            def: 0
        }
    },
    Object: {
        MfsFloat: {
            inputMode: 'decimal',
            type: 'text',
            step: 0.01,
            def: 0
        },
        MfsInteger: {
            inputMode: 'numeric',
            type: 'text',
            step: 1,
            def: 0
        }
    }
});

interface FastStartProviderProps<Theme> extends ThemeProviderProps<Theme> {
    defaultProps: FastStartProps;
}

export {
    createMfsDefaultProps
}

export type {
    FastStartProps,
    FastStartProviderProps
}