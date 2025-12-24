import {useContext} from "react";
import {MfsObjectTextProps} from "../../../types";
import {FastStartContext} from "../../../styles/FastStartProvider.tsx";
import useObjToSingle from "../../../hooks/state/useObjToSingle.ts";
import {SingleText} from "../../Single/TextField/SingleText.tsx";
import {errorObjectToString} from "../../../utils/object/error.ts";
import {TextFieldProps} from "@mui/material";


export const ObjText = <T extends object>(
    customProps: Omit<TextFieldProps, 'name'> & MfsObjectTextProps<T>
) => {
    const defaultProps = useContext(FastStartContext)?.Object?.MfsText;
    const {
        get, set, err, name,
        ...props
    } = defaultProps == null ? customProps : Object.assign({...defaultProps}, customProps);

    const [value, setValue] = useObjToSingle<T, string>(name, get, set);

    return (
        <SingleText
            get={value} set={setValue}
            name={name?.toString()}
            err={errorObjectToString(name, err)}
            {...props}
        />
    );
};
