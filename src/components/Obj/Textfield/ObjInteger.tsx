import { useContext } from "react";
import { FastStartContext } from "@styles/FastStartProvider.tsx";
import SingleInteger from "../../Single/TextField/SingleInteger";
import type { DeepPartial, ObjNumberProps, SingleNumberProps } from "@/types";
import { fastDeepMerge } from "@/utils";
import useObjToSingle from "../../../hooks/state/useObjToSingle";

const ObjInteger = <T extends object>(customProps: ObjNumberProps<T>) => {
    const defaultProps = useContext(FastStartContext).Obj.Integer as DeepPartial<ObjNumberProps<T>>;
    const {get, set, ...props} = fastDeepMerge<ObjNumberProps<T>>(defaultProps, customProps);
    const [value, setValue] = useObjToSingle<T, number>(props.name, get, set);

    return (
        <SingleInteger
            get={value}
            set={setValue}
            {...(props as unknown as SingleNumberProps)}
        />
    )
}

export default ObjInteger;
