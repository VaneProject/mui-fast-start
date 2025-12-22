import {FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectProps} from "@mui/material";
import {MfsSingleSelectRecordProps} from "../../../types";
import React, {useContext, useMemo} from "react";
import {FastStartContext} from "../../../styles/FastStartProvider.tsx";

export type SingleSelectRecordProps<T extends Record<string, unknown>> = SelectProps & MfsSingleSelectRecordProps<T>;

export const SingleSelectRecord = <T extends Record<string, unknown>>(
    customProps: SingleSelectRecordProps<T>
) => {
    const defaultProps = useContext(FastStartContext)?.Single?.MfsSelectRecord;
    const {
        get, set, err, name, label,
        item, renderMenuItem,
        ...props
    } = defaultProps == null
        ? customProps
        : Object.assign({...defaultProps}, customProps);

    const onChange: SelectProps['onChange'] = (event) => {
        set(event.target.value as keyof T);
    }

    const MenuItems = useMemo(() => {
        if (renderMenuItem != null) {
            return Object.entries(item).map(([key, value], i) => (
                renderMenuItem(key, value as T[keyof T], i)
            ));
        } else {
            return Object.entries(item).map(([key, value]) => (
                <MenuItem key={key} value={key}>
                    {value?.toString()}
                </MenuItem>
            ));
        }
    }, [item, renderMenuItem]);

    const isError: boolean = !!err;
    const labelId: string = 'select-label-' + name;
    return (
        <FormControl>
            {label && <InputLabel id={labelId}>{label}</InputLabel>}
            <Select
                name={name?.toString()}
                labelId={labelId}
                error={isError}
                label={label}
                value={get ?? ''}
                onChange={onChange}
                {...props}
            >
                {MenuItems}
            </Select>
            {isError && <FormHelperText>{err}</FormHelperText>}
        </FormControl>
    )
}