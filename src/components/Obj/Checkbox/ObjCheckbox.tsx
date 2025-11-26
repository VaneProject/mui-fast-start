import React, {useContext} from "react";
import {FastStartContext} from "../../../styles/FastStartProvider.tsx";
import {createObjToSingle, fastDeepMerge} from "../../../utils";
import type {ObjCheckboxProps} from "../../../types";
import {SingleCheckbox} from "../../index.ts";

const ObjCheckbox = <T extends object>(customProps: ObjCheckboxProps<T>) => {
    const defaultProps = useContext(FastStartContext).Obj.Checkbox;
    const {
        get, set, label,
        ...props
    } = fastDeepMerge<ObjCheckboxProps<T>>(defaultProps, customProps);
    const [value, setValue] = createObjToSingle<T, boolean>(props.name, get, set);

    return (
        <SingleCheckbox
            label={label}
            get={value} set={setValue}
        />
    )
}

export default ObjCheckbox;
