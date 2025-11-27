import type {SingleNumberProps} from "@/types";
import {useContext} from "react";
import {FastStartContext} from '@styles/FastStartProvider.tsx';
import {useSplitSingleFloatProps} from "@/hooks";
import {TextField} from "@mui/material";

const SingleFloat = (customProps: SingleNumberProps) => {
    const defaultProps = useContext(FastStartContext).Single.Float as SingleNumberProps;
    const props = useSplitSingleFloatProps(defaultProps, customProps);
    return <TextField {...props}/>;
}

export default SingleFloat;
