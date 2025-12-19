import {MfsSingleSelectOneProps} from "../../types";
import {FormControlProps, MenuItem, SelectProps} from "@mui/material";
import {SingleSelectOneProps} from "../../components/Single/Select/SingleSelectOne.tsx";
import React, {Attributes, createElement, LiHTMLAttributes, useMemo} from "react";

const useSplitSelectProps = <T>(
    customProps: SelectProps & MfsSingleSelectOneProps<T>,
    defaultProps: Partial<SingleSelectOneProps<T>> | undefined
): [FormControlProps, SelectProps, {
    error: MfsSingleSelectOneProps<T>['err'],
    MenuItems: React.ReactNode,
}] => {
    const {
        get, set, err, name, label,
        items, renderMenuItem, isPrimitive,
        ...props
    } = defaultProps == null ? customProps : Object.assign({...defaultProps}, customProps);

    const onChange: SelectProps['onChange'] = (event) => {
        if (isPrimitive) {
            set(event.target.value as T);
        }
    }

    const MenuItems = useMemo(() => {
        const render = renderMenuItem ?? (isPrimitive
            ? (item: T): React.ReactNode => createMenuItem(
                item as Attributes['key'],
                item as LiHTMLAttributes<T>['value'], item as React.ReactNode)
            : (item, i): React.ReactNode => createMenuItem(i, i, String(item)));

        return items.map(render);
    }, [isPrimitive, items, renderMenuItem]);

    const isError: boolean = !!err;
    return [{
        fullWidth: props.fullWidth,
        variant: props.variant,
        size: props.size,
        sx: props.sx,
        disabled: props.disabled,
        required: props.required
    }, {
        name: name?.toString(),
        error: isError,
        label,
        value: get,
        onChange,
        ...props
    }, {
        error: err,
        MenuItems
    }];
};

const createMenuItem = <T,>(
    key: Attributes['key'],
    value: LiHTMLAttributes<T>['value'],
    children: React.ReactNode
) => createElement(MenuItem, {key, value: value}, children);

export default useSplitSelectProps;