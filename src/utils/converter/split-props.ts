import type {BaseNumberProps, BasePropertyProps, BaseTextProps, SingleNumberProps, SingleTextProps} from "../../types";
import type {TextFieldProps} from "@mui/material";
import {fastDeepMerge} from "../object/merge.ts";

const splitSingleTextProps = (
    defaultProps: SingleTextProps,
    customProps: SingleTextProps
): BasePropertyProps<string> & BaseTextProps & { props: TextFieldProps } => {
    const {
        get, set, label, errorData,
        minLength, maxLength,
        ...props
    } = fastDeepMerge({...defaultProps}, customProps);

    const textFieldProps = props as TextFieldProps;
    textFieldProps.slotProps ??= {};

    return {
        // base props
        get, set, label, errorData,
        // base text props
        minLength, maxLength,
        // text field props
        props: textFieldProps
    }
}

const splitSingleNumberProps = (
    defaultProps: SingleNumberProps,
    customProps: SingleNumberProps
): BasePropertyProps<number> & BaseNumberProps & { props: TextFieldProps } => {
    const {
        get, set, label, errorData,
        minLength, maxLength,
        disappear, def, min, max, step,
        ...props
    } = fastDeepMerge({...defaultProps}, customProps);

    return {
        // base props
        get, set, label, errorData,
        // base text props
        minLength, maxLength,
        // base number props
        disappear, def, min, max, step,
        // text field props
        props: (props as TextFieldProps)
    }
}

export {
    splitSingleNumberProps
}
