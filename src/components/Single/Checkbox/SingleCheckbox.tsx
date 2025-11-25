import {Checkbox, FormControlLabel} from "@mui/material";
import React, {useCallback, useContext} from "react";
import type {SingleCheckboxProps} from "../../../types";
import {fastDeepMerge} from "../../../utils";
import {FastStartContext} from "../../../styles/FastStartProvider.tsx";

const SingleCheckbox = (customProps: SingleCheckboxProps) => {
    const defaultProps = useContext(FastStartContext).Single.Checkbox;
    const {
        get, set, label, errorData: _,
        ...props
    } = fastDeepMerge<SingleCheckboxProps>(defaultProps, customProps);

    const onChange = useCallback(() => set(!get), [set, get]);

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

export default SingleCheckbox;
