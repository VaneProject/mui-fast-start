import type {SingleTextProps} from "../../../types";
import {useContext} from "react";
import {FastStartContext} from "../../../styles/FastStartProvider.tsx";
import useSplitSingleTextProps from "../../../hooks/splits/useSplitSingleTextProps.ts";
import {TextField} from "@mui/material";

const SingleText = (customProps: SingleTextProps) => {
    const defaultProps = useContext(FastStartContext).Single.Text;
    const props = useSplitSingleTextProps(defaultProps, customProps);
    return <TextField {...props}/>;
}

export default SingleText;
