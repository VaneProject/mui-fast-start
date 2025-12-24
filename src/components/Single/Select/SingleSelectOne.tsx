import {MenuItem, SelectProps} from "@mui/material";
import {MfsSingleSelectOneProps} from "../../../types";
import React, {useContext, useMemo} from "react";
import {FastStartContext} from "../../../styles/FastStartProvider.tsx";
import BaseSingleSelect from "./BaseSingleSelect.tsx";

export type SingleSelectOneProps<Item> = SelectProps & MfsSingleSelectOneProps<Item>;

export const SingleSelectOne = <Item,>(customProps: SingleSelectOneProps<Item>) => {
    const defaultProps = useContext(FastStartContext)?.Single?.MfsSelectOne;
    const {
        get, set, err, label,
        items, renderMenuItem,
        emptyItem, emptyValue,
        getKey, ...props
    } = defaultProps == null
        ? customProps
        : Object.assign({...defaultProps}, customProps);

    const getKeyOrValue = useMemo(() => (
        getKey ?? ((item: Item) => item as string | number)
    ), [getKey]);

    const onChange: SelectProps['onChange'] = (event) => {
        const value = event.target.value;
        if (getKey == null) {
            set((value == "" ? emptyValue : value) as Item);
        } else {
            const item: Item | undefined = items.find((item: Item) => getKeyOrValue(item) === value);
            set(item as Item);
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
