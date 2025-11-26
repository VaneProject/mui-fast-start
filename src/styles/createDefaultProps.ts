import type {BaseNumberProps, FastStartDefaultProps} from "../types";
import type {CheckboxProps, IconButtonProps, TextFieldProps} from "@mui/material";
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

    const checkboxProps: CheckboxProps = {
        size: 'small'
    }

    const checkIconProps: IconButtonProps = {
        size: 'small'
    }

    return fastDeepMerge({
        Single: {
            Float: {...floatProps},
            Integer: {...integerProps},
            Text: {...textFieldProps},
            Checkbox: {...checkboxProps},
            CheckIcon: {...checkIconProps},
            Outlined: {
                Float: {
                    ...floatProps
                }
            }
        },
        Obj: {
            Float: {...floatProps},
            Integer: {...integerProps},
            Checkbox: {...checkboxProps},

        }
    } as FastStartDefaultProps, props);
}

export default createDefaultProps;
