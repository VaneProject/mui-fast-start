import type {DeepPartial, ObjNumberProps, SingleNumberProps} from "@/types";
import {useContext} from "react";
import {FastStartContext} from '@styles/FastStartProvider.tsx';
import {fastDeepMerge} from "@/utils";
import useObjToSingle from '../../../hooks/state/useObjToSingle';
import {SingleFloat} from '../../index';

const ObjFloat = <T extends object>(customProps: ObjNumberProps<T>) => {
    const defaultProps = useContext(FastStartContext).Obj.Float as DeepPartial<ObjNumberProps<T>>;
    const {get, set, ...props} = fastDeepMerge<ObjNumberProps<T>>(defaultProps, customProps);
    const [value, setValue] = useObjToSingle<T, number>(props.name, get, set);

    return (
        <SingleFloat
            get={value}
            set={setValue}
            {...(props as unknown as SingleNumberProps)}
        />
    )
}

export default ObjFloat;
