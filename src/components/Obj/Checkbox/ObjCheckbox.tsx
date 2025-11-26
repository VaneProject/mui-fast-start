import React, {useContext} from "react";
import {FastStartContext} from "../../../styles/FastStartProvider.tsx";
import {fastDeepMerge} from "../../../utils";
import type {DeepPartial, ObjCheckboxProps} from "../../../types";
import {SingleCheckbox} from "../../index.ts";
import useObjToSingle from "../../../hooks/state/useObjToSingle.ts";

const ObjCheckbox = <T extends object>(customProps: ObjCheckboxProps<T>) => {
    const defaultProps = useContext(FastStartContext).Obj.Checkbox as DeepPartial<ObjCheckboxProps<T>>;
    const {
        get, set, label,
        ...props
    } = fastDeepMerge<ObjCheckboxProps<T>>(defaultProps, customProps);
    const [value, setValue] = useObjToSingle<T, boolean>(props.name, get, set);

    return (
        <SingleCheckbox
            label={label}
            get={value} set={setValue}
        />
    )
}

export default ObjCheckbox;
