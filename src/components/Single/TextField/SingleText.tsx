import type {SingleTextProps} from "@/types";
import {useContext} from "react";
import useSplitSingleTextProps from '../../../hooks/splits/useSplitSingleTextProps';
import {TextField} from "@mui/material";
import {FastStartContext} from '@styles/FastStartProvider.tsx';

const SingleText = (customProps: SingleTextProps) => {
    const defaultProps = useContext(FastStartContext).Single.Text as SingleTextProps;
    const props = useSplitSingleTextProps(defaultProps, customProps);
    return <TextField {...props}/>;
}

export default SingleText;
