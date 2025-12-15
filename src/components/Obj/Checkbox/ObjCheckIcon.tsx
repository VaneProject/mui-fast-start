import {useContext} from "react";
import {DeepPartial, ObjCheckIconProps, SingleCheckIconProps} from "../../../types";
import {fastDeepMerge} from "../../../utils";
import useObjToSingle from "../../../hooks/state/useObjToSingle.ts";
import {SingleCheckIcon} from "../../Single/Checkbox/SingleCheckIcon.tsx";
import {FastStartContext} from "../../../styles/FastStartProvider.tsx";

export const ObjCheckIcon = <T extends object>(customProps: ObjCheckIconProps<T>) => {
    const defaultProps = useContext(FastStartContext)?.Obj?.CheckIcon as DeepPartial<ObjCheckIconProps<T>>;
    const {get, set, ...props} = fastDeepMerge<ObjCheckIconProps<T>>(defaultProps, customProps);
    const [value, setValue] = useObjToSingle<T, boolean>(props.name, get, set);

    return (
        <SingleCheckIcon
            get={value} set={setValue}
            {...(props as unknown as Omit<SingleCheckIconProps, 'get' | 'set'>)}
        />
    );
}
