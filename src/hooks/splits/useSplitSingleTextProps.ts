import type {SingleTextProps} from "../../types";
import type {TextFieldProps} from "@mui/material";
import React, {useCallback} from "react";
import {fastDeepMerge} from "../../utils";

const useSplitSingleTextProps = (
    defaultProps: SingleTextProps,
    customProps: SingleTextProps
): TextFieldProps => {
    const {
        get, set, errorData,
        minLength, maxLength,
        ...props
    } = fastDeepMerge({...defaultProps}, customProps);

    const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        set(event.currentTarget.value);
    }, [set]);

    return fastDeepMerge<TextFieldProps>({
        error: !!errorData,
        helperText: errorData,
        value: get,
        onChange,
        slotProps: {
            htmlInput: {minLength, maxLength}
        }
    }, (props as TextFieldProps));
}

export default useSplitSingleTextProps;
