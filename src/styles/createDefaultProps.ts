import type { DeepPartial, FastStartDefaultProps } from "../types";
import type { TextFieldProps } from "@mui/material";
import {fastDeepMerge} from "../utils";


const createDefaultProps = (props: DeepPartial<FastStartDefaultProps> = {}): FastStartDefaultProps => {
    const textFieldProps: TextFieldProps = {
        fullWidth: true,
        autoComplete: 'off',
        variant: 'outlined',
        size: 'small'
    }

    const defaultProps: FastStartDefaultProps = {
        Single: {
            Float: {
                ...textFieldProps,
                inputMode: 'decimal',
                type: 'text',
                step: 0.01,
                def: 0
            },
            Integer: {
                ...textFieldProps,
                inputMode: 'numeric',
                type: 'text',
                step: 1,
                def: 0
            },
            Text: {
                ...textFieldProps
            },
            Checkbox: {
                size: 'small'
            }
        },
        Obj: {
            Checkbox: {
                size: 'small'
            }
        }
    } as FastStartDefaultProps;

    if (props != null) {
        return fastDeepMerge(defaultProps, props);
    }
    return defaultProps;
}

export default createDefaultProps;
