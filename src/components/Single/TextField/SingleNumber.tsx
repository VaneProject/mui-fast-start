import {useContext} from "react";
import {TextField, TextFieldProps} from "@mui/material";
import {FastStartContext} from "../../../styles/FastStartProvider.tsx";
import {MfsSingleNumberProps} from "../../../types";
import {useSplitSingleFloatProps, useSplitSingleIntegerProps} from "../../../hooks";

export type SingleNumberProps = TextFieldProps & MfsSingleNumberProps;

export const SingleFloat = (customProps: SingleNumberProps) => {
    const defaultProps = useContext(FastStartContext)?.Single?.MfsFloat;
    const props = useSplitSingleFloatProps(defaultProps, customProps);
    return <TextField {...props}/>;
}

export const SingleInteger = (customProps: SingleNumberProps) => {
    const defaultProps = useContext(FastStartContext)?.Single?.MfsInteger;
    const props = useSplitSingleIntegerProps(defaultProps, customProps);
    return <TextField {...props}/>;
}