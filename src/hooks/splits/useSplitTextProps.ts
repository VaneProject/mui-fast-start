import type {TextFieldProps} from "@mui/material";
import React from "react";
import {fastDeepMerge} from "../../utils";
import {MfsSingleTextProps} from "../../types";
import {SingleTextProps} from "../../components/Single/TextField/SingleText.tsx";

const useSplitTextProps = (
    defaultProps: Partial<MfsSingleTextProps> | undefined,
    customProps: SingleTextProps
): TextFieldProps => {
    const {
        get, set, err,
        minLength, maxLength,
        startAdornment, endAdornment,
        ...props
    } = defaultProps == null ? customProps : Object.assign({...defaultProps}, customProps);

    const onChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        set(event.currentTarget.value);
    }

    return fastDeepMerge<TextFieldProps>({
        error: !!err,
        helperText: err,
        value: get,
        onChange,
        slotProps: {
            htmlInput: {minLength, maxLength},
            input: {startAdornment, endAdornment}
        }
    }, (props as TextFieldProps));
}

export default useSplitTextProps;
