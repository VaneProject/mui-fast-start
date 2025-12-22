import {MenuItem, SelectProps} from "@mui/material";
import {MfsSingleSelectOneProps} from "../../../types";
import React, {useContext, useMemo} from "react";
import {FastStartContext} from "../../../styles/FastStartProvider.tsx";
import BaseSingleSelect from "./BaseSingleSelect.tsx";

export type SingleSelectOneProps<T> = SelectProps & MfsSingleSelectOneProps<T>;

export const SingleSelectOne = <T,>(customProps: SingleSelectOneProps<T>) => {
    const defaultProps = useContext(FastStartContext)?.Single?.MfsSelectOne;
    const {
        get, set, err, label,
        items, getKey,
        renderMenuItem,
        emptyItem,
        ...props
    } = defaultProps == null
        ? customProps
        : Object.assign({...defaultProps}, customProps);

    const getKeyOrValue = useMemo(() => (
        getKey ?? ((item: T) => item as string | number)
    ), [getKey]);

    const onChange: SelectProps['onChange'] = (event) => {
        const value = event.target.value;
        if (getKey == null) {
            set(value as T);
        } else {
            const item: T | undefined = items.find((item: T) => getKeyOrValue(item) === value);
            set(item as T);
        }
    }

    const MenuItems = useMemo(() => {
        if (renderMenuItem != null) {
            return items.map(renderMenuItem);
        } else {
            return items.map((item) => {
                const key = getKeyOrValue(item);
                return <MenuItem key={key} value={key}>{key}</MenuItem>;
            })
        }
    }, [getKeyOrValue, items, renderMenuItem]);

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
    );
}
