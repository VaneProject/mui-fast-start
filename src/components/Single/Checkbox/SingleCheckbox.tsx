import {Checkbox, CheckboxProps, FormControlLabel} from "@mui/material";
import React, {useCallback, useContext} from "react";
import {FastStartContext} from "../../../styles/FastStartProvider.tsx";
import {MfsSingleCheckboxProps} from "../../../types";

export type SingleCheckboxProps = CheckboxProps & MfsSingleCheckboxProps;

export const SingleCheckbox = (customProps: SingleCheckboxProps) => {
    const defaultProps = useContext(FastStartContext)?.Single?.MfsCheckbox;
    const {
        get, set, label,
        ...props
    } = defaultProps == null
        ? customProps
        : Object.assign({...defaultProps}, customProps);

    const onChange = useCallback(() => set((state) => !state), [set]);

    return label == null ? (
        <Checkbox
            checked={get}
            onChange={onChange}
            {...props}
        />
    ) : (
        <FormControlLabel
            checked={get}
            label={label}
            onChange={onChange}
            control={<Checkbox {...props}/>}
        />
    );
};
