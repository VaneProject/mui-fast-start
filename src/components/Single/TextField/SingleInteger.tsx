import type {SingleNumberProps} from "@/types";
import {useContext} from "react";
import {FastStartContext} from '@styles/FastStartProvider.tsx';
import {useSplitSingleIntegerProps} from "@/hooks";
import {TextField} from "@mui/material";

const SingleInteger = (customProps: SingleNumberProps) => {
    const defaultProps = useContext(FastStartContext).Single.Integer as SingleNumberProps;
    const props = useSplitSingleIntegerProps(defaultProps, customProps);
    return <TextField {...props}/>;
}

export default SingleInteger;
