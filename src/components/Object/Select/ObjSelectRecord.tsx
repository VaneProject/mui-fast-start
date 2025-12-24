import {useContext} from "react";
import {FastStartContext} from "../../../styles/FastStartProvider.tsx";
import useObjToSingle from "../../../hooks/state/useObjToSingle.ts";
import {SingleSelectRecord} from "../../Single/Select/SingleSelectRecord.tsx";
import {MfsObjectSelectRecordProps} from "../../../types";
import {SelectProps} from "@mui/material";
import {errorObjectToString} from "../../../utils/object/error.ts";


export const ObjSelectRecord = <
    T extends object,
    Item extends Record<PropertyKey, unknown>
>(customProps: Omit<SelectProps, 'name'> & MfsObjectSelectRecordProps<T, Item>) => {
    const defaultProps = useContext(FastStartContext)?.Single?.MfsSelectRecord;
    const {
        get, set, err, name,
        variant,
        ...props
    } = defaultProps == null
        ? customProps
        : Object.assign({...defaultProps}, customProps);

    const [value, setValue] = useObjToSingle<T, Item>(name, get, set);

    return (
        <SingleSelectRecord
            get={value} set={setValue}
            name={name?.toString()}
            err={errorObjectToString(name, err)}
            variant={variant}
            {...props}
        />
    )
}