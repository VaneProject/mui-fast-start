import {Checkbox, FormControlLabel} from "@mui/material";
import React, {useCallback, useContext} from "react";
import {SingleCheckboxProps} from "../../../types";
import {FastStartContext} from "../../../styles/FastStartProvider.tsx";
import {fastDeepMerge} from "../../../utils";


export const SingleCheckbox = (customProps: SingleCheckboxProps) => {
    const defaultProps = useContext(FastStartContext)?.Single?.Checkbox;
    const {
        get, set, label,
        ...props
    } = fastDeepMerge<SingleCheckboxProps>(defaultProps, customProps);

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
