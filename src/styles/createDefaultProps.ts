import type {BaseNumberProps, FastStartDefaultProps} from "../types";
import type {TextFieldProps} from "@mui/material";
import {fastDeepMerge} from "../utils";


const createDefaultProps = (props?: FastStartDefaultProps | undefined): FastStartDefaultProps => {
    const textFieldProps: TextFieldProps & BaseNumberProps = {
        fullWidth: true,
        autoComplete: 'off',
        variant: 'outlined',
        size: 'small'
    }
    const floatProps: TextFieldProps & BaseNumberProps = Object.assign({
        inputMode: 'decimal',
        type: 'text',
        step: 0.01,
        def: 0
    }, textFieldProps);

    const integerProps: TextFieldProps & BaseNumberProps = Object.assign({
        inputMode: 'numeric',
        type: 'text',
        step: 1,
        def: 0
    }, textFieldProps);

    return fastDeepMerge({
        Single: {
            Float: {...floatProps},
            Integer: {...integerProps},
            Text: {...textFieldProps},
            Checkbox: {size: 'small'},
            CheckIcon: {size: 'small'},
        },
        Obj: {
            Float: {...floatProps},
            Integer: {...integerProps},
            Text: {...textFieldProps},
            Checkbox: {size: 'small'},
            CheckIcon: {size: 'small'},
        }
    } as FastStartDefaultProps, props);
}

export default createDefaultProps;
