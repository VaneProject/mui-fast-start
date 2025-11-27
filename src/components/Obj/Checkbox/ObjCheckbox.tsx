import React, {useContext} from "react";
import {FastStartContext} from "../../../styles/FastStartProvider.tsx";
import {fastDeepMerge} from "../../../utils";
import type {DeepPartial, ObjCheckboxProps, SingleCheckboxProps} from "../../../types";
import {SingleCheckbox} from "../../index.ts";
import useObjToSingle from "../../../hooks/state/useObjToSingle.ts";

const ObjCheckbox = <T extends object>(customProps: ObjCheckboxProps<T>) => {
    const defaultProps = useContext(FastStartContext).Obj.Checkbox as DeepPartial<ObjCheckboxProps<T>>;
    const {get, set, ...props} = fastDeepMerge<ObjCheckboxProps<T>>(defaultProps, customProps);
    const [value, setValue] = useObjToSingle<T, boolean>(props.name, get, set);

    return (
        <SingleCheckbox 
            get={value} 
            set={setValue} 
            {...(props as unknown as SingleCheckboxProps)}
        />
    );
};

export default ObjCheckbox;
