import type {OutlinedInputProps, TextFieldProps} from "@mui/material";
import {FormControl, InputLabel, OutlinedInput} from "@mui/material";
import type {SingleOutlinedNumberProps} from "../../../types";
import {useContext} from "react";
import {FastStartContext} from "../../../styles/FastStartProvider.tsx";
import {useSplitSingleFloatProps} from "../../../hooks";

const SingleOutlinedFloat = (customProps: SingleOutlinedNumberProps) => {
    const defaultProps = useContext(FastStartContext).Single.Outlined.Float as SingleOutlinedNumberProps;
    const {
        variant,
        ...props
    } = useSplitSingleFloatProps(defaultProps, customProps) as OutlinedInputProps & TextFieldProps;

    const label = props.label;
    return (label == null) ? (
        <OutlinedInput {...props}/>
    ) : (
        <FormControl
            fullWidth={props.fullWidth}
            variant={variant}
        >
            <InputLabel htmlFor={props.id}>{label}</InputLabel>
            <OutlinedInput
                {...props}
            />
        </FormControl>
    )
}

export default SingleOutlinedFloat;
