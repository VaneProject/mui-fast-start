import React, {useContext} from "react";
import useObjToSingle from '../../../hooks/state/useObjToSingle.ts';
import {fastDeepMerge} from "../../../utils";
import {DeepPartial, ObjCheckboxProps, SingleCheckboxProps} from "../../../types";
import {SingleCheckbox} from "../../Single/Checkbox/SingleCheckbox.tsx";
import {FastStartContext} from "../../../styles/FastStartProvider.tsx";

export const ObjCheckbox = <T extends object>(customProps: ObjCheckboxProps<T>) => {
    const defaultProps = useContext(FastStartContext)?.Obj?.Checkbox as DeepPartial<ObjCheckboxProps<T>>;
    const {get, set, ...props} = fastDeepMerge<ObjCheckboxProps<T>>(defaultProps, customProps);
    const [value, setValue] = useObjToSingle<T, boolean>(props.name, get, set);

    return (
        <SingleCheckbox
            get={value} set={setValue}
            {...(props as unknown as Omit<SingleCheckboxProps, 'set' | 'get'>)}
        />
    );
}
