import type {DeepPartial, ObjCheckIconProps, SingleCheckIconProps} from "../../../types";
import {useContext} from "react";
import {FastStartContext} from "../../../styles/FastStartProvider.tsx";
import {fastDeepMerge} from "../../../utils";
import {SingleCheckIcon} from "../../index.ts";
import useObjToSingle from "../../../hooks/state/useObjToSingle.ts";

const ObjCheckIcon = <T extends object>(customProps: ObjCheckIconProps<T>) => {
    const defaultProps = useContext(FastStartContext).Obj.CheckIcon as DeepPartial<ObjCheckIconProps<T>>;
    const {get, set, ...props} = fastDeepMerge<ObjCheckIconProps<T>>(defaultProps, customProps);
    const [value, setValue] = useObjToSingle<T, boolean>(props.name, get, set);

    return (
        <SingleCheckIcon 
            get={value} 
            set={setValue} 
            {...(props as unknown as SingleCheckIconProps)}
        />
    );
}

export default ObjCheckIcon;
