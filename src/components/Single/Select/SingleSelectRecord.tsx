import {MenuItem, SelectProps} from "@mui/material";
import {MfsSingleSelectRecordProps} from "../../../types";
import React, {useContext, useMemo} from "react";
import {FastStartContext} from "../../../styles/FastStartProvider.tsx";
import BaseSingleSelect from "./BaseSingleSelect.tsx";


export const SingleSelectRecord = <
    T extends Record<string, React.ReactNode>,
    Value = keyof T | undefined | null
>(customProps: SelectProps & MfsSingleSelectRecordProps<T, Value>) => {
    const defaultProps = useContext(FastStartContext)?.Single?.MfsSelectRecord;
    const {
        get, set, err, label,
        items, renderMenuItem,
        emptyItem, emptyValue,
        ...props
    } = defaultProps == null
        ? customProps
        : Object.assign({...defaultProps}, customProps);

    const onChange: SelectProps['onChange'] = (event) => {
        const value = event.target.value;
        set((value == "" ? emptyValue : value) as Value);
    }

    const MenuItems = useMemo(() => {
        if (renderMenuItem != null) {
            return Object.entries(items).map(([key, value], i) => (
                renderMenuItem(key, value as T[keyof T], i)
            ));
        } else {
            return Object.entries(items).map(([key, value]) => (
                <MenuItem key={key} value={key}>
                    {value}
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