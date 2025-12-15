import { useContext } from "react";
import {DeepPartial, ObjTextProps, SingleTextProps} from "../../../types";
import {FastStartContext} from "../../../styles/FastStartProvider.tsx";
import {fastDeepMerge} from "../../../utils";
import useObjToSingle from "../../../hooks/state/useObjToSingle.ts";
import {SingleText} from "../../Single/TextField/SingleText.tsx";
import {errorObjectToString} from "../../../utils/object/error.ts";


export const ObjText = <T extends object>(customProps: ObjTextProps<T>) => {
    const defaultProps = useContext(FastStartContext)?.Obj?.Text as DeepPartial<ObjTextProps<T>>;
    const {get, set, errorData, ...props} = fastDeepMerge<ObjTextProps<T>>(defaultProps, customProps);
    const [value, setValue] = useObjToSingle<T, string>(props.name, get, set);

    return (
        <SingleText
            get={value} set={setValue}
            errorData={errorObjectToString(props.name, errorData)}
            {...(props as unknown as Omit<SingleTextProps, 'get' | 'set' | 'errorData'>)}
        />
    );
};
