import {useContext} from "react";
import useSplitTextProps from '../../../hooks/splits/useSplitTextProps.ts';
import {TextField, TextFieldProps} from "@mui/material";
import {FastStartContext} from "../../../styles/FastStartProvider.tsx";
import {MfsSingleTextProps} from "../../../types";

export type SingleTextProps = TextFieldProps & MfsSingleTextProps;

export const SingleText = (customProps: SingleTextProps) => {
    const defaultProps = useContext(FastStartContext)?.Single?.MfsText;
    const props = useSplitTextProps(defaultProps, customProps);
    return <TextField {...props}/>;
}
