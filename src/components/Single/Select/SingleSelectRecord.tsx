import {FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectProps} from "@mui/material";
import {MfsSingleSelectRecordProps} from "../../../types";
import React, {useContext, useMemo} from "react";
import {FastStartContext} from "../../../styles/FastStartProvider.tsx";
import BaseSingleSelect from "./BaseSingleSelect.tsx";

export type SingleSelectRecordProps<
    T extends Record<string, unknown>,
    Value = keyof T | undefined | null
> = SelectProps & MfsSingleSelectRecordProps<T, Value>;

export const SingleSelectRecord = <
    T extends Record<string, unknown>,
    Value = keyof T | undefined | null
>(customProps: SingleSelectRecordProps<T, Value>) => {
    const defaultProps = useContext(FastStartContext)?.Single?.MfsSelectRecord;
    const {
        get, set, err, label,
        items,
        emptyItem,
        renderMenuItem,
        ...props
    } = defaultProps == null
        ? customProps
        : Object.assign({...defaultProps}, customProps);

    const onChange: SelectProps['onChange'] = (event) => {
        set(event.target.value as Value);
    }

    const MenuItems = useMemo(() => {
        if (renderMenuItem != null) {
            return Object.entries(items).map(([key, value], i) => (
                renderMenuItem(key, value as T[keyof T], i)
            ));
        } else {
            return Object.entries(items).map(([key, value]) => (
                <MenuItem key={key} value={key}>
                    {value?.toString()}
                </MenuItem>
            ));
        }
    }, [items, renderMenuItem]);

    return (
        <BaseSingleSelect
            label={label}
            items={MenuItems}
            emptyItem={emptyItem}
            get={get}
            err={err}
            onChange={onChange}
            selectProps={props}
        />
    )
}