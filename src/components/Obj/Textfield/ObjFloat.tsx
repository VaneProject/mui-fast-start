import {useContext} from "react";
import {DeepPartial, ObjNumberProps, SingleNumberProps} from "../../../types";
import {fastDeepMerge} from "../../../utils";
import useObjToSingle from "../../../hooks/state/useObjToSingle.ts";
import {SingleFloat} from "../../Single/TextField/SingleFloat.tsx";
import {FastStartContext} from "../../../styles/FastStartProvider.tsx";
import {errorObjectToString} from "../../../utils/object/error.ts";


export const ObjFloat = <T extends object>(customProps: ObjNumberProps<T>) => {
    const defaultProps = useContext(FastStartContext)?.Obj?.Float as DeepPartial<ObjNumberProps<T>>;
    const {get, set, errorData, ...props} = fastDeepMerge<ObjNumberProps<T>>(defaultProps, customProps);
    const [value, setValue] = useObjToSingle<T, number>(props.name, get, set);

    return (
        <SingleFloat
            get={value} set={setValue}
            errorData={errorObjectToString(props.name, errorData)}
            {...(props as unknown as Omit<SingleNumberProps, 'get' | 'set' | 'errorData'>)}
        />
    )
}
