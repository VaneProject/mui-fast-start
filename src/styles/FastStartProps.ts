import {
    MfsObjectCheckboxProps,
    MfsObjectCheckIconProps,
    MfsObjectNumberProps, MfsObjectSelectOneProps, MfsObjectSelectRecordProps,
    MfsObjectTextProps,
    MfsSingleCheckboxProps,
    MfsSingleCheckIconProps,
    MfsSingleNumberProps,
    MfsSingleSelectOneProps, MfsSingleSelectRecordProps,
    MfsSingleTextProps
} from "../types";
import type {ThemeProviderProps} from "@mui/material";
import {fastDeepMerge} from "../utils";

interface FastStartProps {
    Single: Partial<{
        MfsFloat: Partial<MfsSingleNumberProps>,
        MfsInteger: Partial<MfsSingleNumberProps>,
        MfsText: Partial<MfsSingleTextProps>,
        MfsCheckbox: Partial<MfsSingleCheckboxProps>,
        MfsCheckIcon: Partial<MfsSingleCheckIconProps>,
        MfsSelectOne: Partial<MfsSingleSelectOneProps<unknown>>,
        MfsSelectRecord: Partial<MfsSingleSelectRecordProps<Record<string, unknown>>>
    }>,
    Object: Partial<{
        MfsFloat: Partial<MfsObjectNumberProps<object>>,
        MfsInteger: Partial<MfsObjectNumberProps<object>>,
        MfsText: Partial<MfsObjectTextProps<object>>,
        MfsCheckbox: Partial<MfsObjectCheckboxProps<object>>,
        MfsCheckIcon: Partial<MfsObjectCheckIconProps<object>>,
        MfsSelectOne: Partial<MfsObjectSelectOneProps<object, unknown>>,
        MfsSelectRecord: Partial<MfsObjectSelectRecordProps<object, Record<string, unknown>>>
    }>
}

const mfsDefaultProps: Partial<FastStartProps> = {
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
}

const createMfsProps = (customProps: Partial<FastStartProps>) => {
    return fastDeepMerge({...mfsDefaultProps}, customProps);
}

interface FastStartProviderProps<Theme> extends ThemeProviderProps<Theme> {
    defaultProps: Partial<FastStartProps>;
}

export {
    createMfsProps
}

export type {
    FastStartProps,
    FastStartProviderProps
}