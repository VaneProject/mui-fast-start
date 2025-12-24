import {useContext} from "react";
import useObjToSingle from "../../../hooks/state/useObjToSingle.ts";
import {FastStartContext} from "../../../styles/FastStartProvider.tsx";
import {errorObjectToString} from "../../../utils/object/error.ts";
import {SingleFloat, SingleInteger} from "../../Single/TextField/SingleNumber.tsx";
import {MfsObjectNumberProps} from "../../../types";
import {TextFieldProps} from "@mui/material";

type ObjNumberProps<T extends object> = Omit<TextFieldProps, 'name'> & MfsObjectNumberProps<T>;

export const ObjFloat = <T extends object>(customProps: ObjNumberProps<T>) => {
    const defaultProps = useContext(FastStartContext)?.Object?.MfsFloat;
    const {
        get, set, err, name,
        ...props
    } = defaultProps == null
        ? customProps
        : Object.assign({...defaultProps}, customProps);

    const [value, setValue] = useObjToSingle<T, number>(name, get, set);

    return (
        <SingleFloat
            get={value} set={setValue}
            name={name?.toString()}
            err={errorObjectToString(name, err)}
            {...props}
        />
    )
}

export const ObjInteger = <T extends object>(customProps: ObjNumberProps<T>) => {
    const defaultProps = useContext(FastStartContext)?.Object?.MfsInteger;
    const {
        get, set, err, name,
        ...props
    } = defaultProps == null
        ? customProps
        : Object.assign({...defaultProps}, customProps);

    const [value, setValue] = useObjToSingle<T, number>(name, get, set);

    return (
        <SingleInteger
            get={value} set={setValue}
            name={name?.toString()}
            err={errorObjectToString(name, err)}
            {...props}
        />
    )
}
