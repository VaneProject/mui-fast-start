import {FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectProps} from "@mui/material";
import React, {useId} from "react";
import {MfsSingleError} from "../../../types/props.internal.ts";

const BaseSingleSelect = <Value,>(props: {
    emptyItem?: React.ReactNode,
    label?: React.ReactNode,
    err: MfsSingleError,
    items: React.ReactNode,
    get: Value,
    onChange: SelectProps['onChange'],
    selectProps: SelectProps
}) => {
    const {emptyItem, label, selectProps} = props;
    const labelId = useId();

    const isError: boolean = !!props.err;
    return (
        <FormControl
            error={isError}
            fullWidth={selectProps.fullWidth}
            variant={selectProps.variant}
            size={selectProps.size}
            sx={selectProps.sx}
            disabled={selectProps.disabled}
            required={selectProps.required}
            margin={selectProps.margin}
        >
            {label && <InputLabel id={labelId}>{label}</InputLabel>}
            <Select
                labelId={labelId}
                error={isError}
                label={label}
                value={props.get ?? ''}
                onChange={props.onChange}
                {...selectProps}
            >
                {emptyItem && <MenuItem key='' value=''>{emptyItem}</MenuItem>}
                {props.items}
            </Select>
            {isError && <FormHelperText>{props.err}</FormHelperText>}
        </FormControl>
    )
}

export default BaseSingleSelect;