import {useContext} from "react";
import {FastStartContext} from "../../../styles/FastStartProvider.tsx";
import type {SingleNumberProps} from "../../../types";
import {TextField} from "@mui/material";
import {useSplitSingleFloatProps} from "../../../hooks";

const SingleFloat = (customProps: SingleNumberProps) => {
    const defaultProps = useContext(FastStartContext).Single.Float;
    const props = useSplitSingleFloatProps(defaultProps, customProps);
    return <TextField {...props}/>;
}

export default SingleFloat;
