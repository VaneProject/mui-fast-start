import {FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectProps} from "@mui/material";
import {MfsSingleSelectOneProps} from "../../../types";
import React, {Attributes, createElement, LiHTMLAttributes, useContext, useMemo} from "react";
import {FastStartContext} from "../../../styles/FastStartProvider.tsx";

export type SingleSelectOneProps<T> = SelectProps & MfsSingleSelectOneProps<T>;

export const SingleSelectOne = <T,>(customProps: SingleSelectOneProps<T>) => {
    const defaultProps = useContext(FastStartContext)?.Single?.MfsSelectOne;
    const {
        get, set, err, name, label,
        items, renderMenuItem, isPrimitive,
        ...props
    } = defaultProps == null
        ? customProps
        : Object.assign({...defaultProps}, customProps);

    const onChange: SelectProps['onChange'] = (event) => {
        if (isPrimitive) {
            set(event.target.value as T);
        }
    }

    const MenuItems = useMemo(() => {
        if (renderMenuItem != null) {
            return items.map(renderMenuItem);
        } else if (isPrimitive) {
            return items.map((item) => (
                <MenuItem key={item} value={item}>
                    {item}
                </MenuItem>
            ));
        } else {
            return items.map((item, i: number) => (
                <MenuItem key={item} value={item}>
                    {item}
                </MenuItem>
            ))
        }
    }, []);

    const isError: boolean = !!err;
    const labelId: string = 'select-label-' + name;
    return (
        <FormControl>
            {label && (<InputLabel id={labelId}>{label}</InputLabel>)}
            <Select
                name={name?.toString()}
                labelId={labelId}
                error={isError}
                label={label}
                value={get}
                {...props}
            >
                {MenuItems}
            </Select>
            {isError && (<FormHelperText>{err}</FormHelperText>)}
        </FormControl>
    )
}
