import React, {useContext} from "react";
import {SingleCheckbox} from "../../Single/Checkbox/SingleCheckbox.tsx";
import {FastStartContext} from "../../../styles/FastStartProvider.tsx";
import {CheckboxProps} from "@mui/material";
import {MfsObjectCheckboxProps} from "../../../types";
import useObjToSingle from "../../../hooks/state/useObjToSingle.ts";

export type ObjCheckboxProps<T extends object> = Omit<CheckboxProps, 'name'> & MfsObjectCheckboxProps<T>;

export const ObjCheckbox = <T extends object>(customProps: ObjCheckboxProps<T>) => {
    const defaultProps = useContext(FastStartContext)?.Object?.MfsCheckbox;
    const {
        get, set, label, name, 
        ...props
    } = defaultProps == null
        ? customProps
        : Object.assign({...defaultProps}, customProps);

    const [value, setValue] = useObjToSingle<T, boolean>(name, get, set);

    return (
        <SingleCheckbox
            get={value}
            set={setValue}
            label={label}
            name={name?.toString()}
            {...props}
        />
    );
}
