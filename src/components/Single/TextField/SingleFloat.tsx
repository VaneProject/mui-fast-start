import {useContext} from "react";
import {TextField} from "@mui/material";
import {FastStartContext} from "../../../styles/FastStartProvider.tsx";
import {SingleNumberProps} from "../../../types";
import {useSplitSingleFloatProps} from "../../../hooks";


export const SingleFloat = (customProps: SingleNumberProps) => {
    const defaultProps = useContext(FastStartContext)?.Single?.Float as SingleNumberProps;
    const props = useSplitSingleFloatProps(defaultProps, customProps);
    return <TextField {...props}/>;
}
