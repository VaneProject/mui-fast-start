import {useContext} from "react";
import {TextField} from "@mui/material";
import {FastStartContext} from "../../../styles/FastStartProvider.tsx";
import {SingleNumberProps} from "../../../types";
import {useSplitSingleIntegerProps} from "../../../hooks";


export const SingleInteger = (customProps: SingleNumberProps) => {
    const defaultProps = useContext(FastStartContext)?.Single?.Integer as SingleNumberProps;
    const props = useSplitSingleIntegerProps(defaultProps, customProps);
    return <TextField {...props}/>;
}
