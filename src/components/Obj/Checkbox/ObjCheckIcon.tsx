import type {ObjCheckboxProps, ObjCheckIconProps} from "../../../types";
import {useContext} from "react";
import {FastStartContext} from "../../../styles/FastStartProvider.tsx";
import {createObjToSingle, fastDeepMerge} from "../../../utils";
import {SingleCheckIcon} from "../../index.ts";

const ObjCheckIcon = <T extends object>(customProps: ObjCheckIconProps<T>) => {
    const defaultProps = useContext(FastStartContext).Obj.CheckIcon;
    const {
        get, set, on, off,
        ...props
    } = fastDeepMerge<ObjCheckIconProps<T>>(defaultProps, customProps);
    const [value, setValue] = createObjToSingle<T, boolean>(props.name, get, set);

    return (
        <SingleCheckIcon
            get={value} set={setValue}
            on={on} off={off}
        />
    )
}

export default ObjCheckIcon;
