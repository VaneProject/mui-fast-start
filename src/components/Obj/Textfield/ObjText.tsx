import { useContext } from "react";
import type { DeepPartial, ObjTextProps, SingleTextProps } from "@/types";
import SingleText from "../../Single/TextField/SingleText";
import { FastStartContext } from "@styles/FastStartProvider.tsx";
import { fastDeepMerge } from "@/utils";
import useObjToSingle from "../../../hooks/state/useObjToSingle";

const ObjText = <T extends object>(customProps: ObjTextProps<T>) => {
    const defaultProps = useContext(FastStartContext).Obj.Text as DeepPartial<ObjTextProps<T>>;
    const {get, set, ...props} = fastDeepMerge<ObjTextProps<T>>(defaultProps, customProps);
    const [value, setValue] = useObjToSingle<T, string>(props.name, get, set);

    return (
        <SingleText
            get={value}
            set={setValue}
            {...(props as unknown as SingleTextProps)}
        />
    );
};

export default ObjText;
