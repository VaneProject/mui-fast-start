import SingleBase from "./SingleBase.tsx";
import type {TextFieldProps} from "@mui/material";
import {TextField} from "@mui/material";
import React from "react";
import {SlotProps} from "@mui/material/utils/types";
import {InputBaseProps} from "@mui/material/InputBase";
import type {TextFieldOwnerState} from "@mui/material/TextField/TextField";
import {InputLabelProps} from "@mui/material/InputLabel";

abstract class SingleBaseTextField<TYPE, PROPS = unknown, STATE = unknown>
    extends SingleBase<TYPE, PROPS & TextFieldProps, STATE> {

    protected getProps(): PROPS & TextFieldProps {
        return Object.assign({
            fullWidth: true,
            autoComplete: 'off',
            variant: 'outlined',
            size: 'small'
        }, this.props);
    }

    protected abstract get htmlInput(): SlotProps<React.ElementType<InputBaseProps['inputProps']>, {}, TextFieldOwnerState>;
    protected abstract get inputLabel(): SlotProps<React.ElementType<InputLabelProps>, {}, TextFieldOwnerState>;

    override render() {
        const {errorData} = this.props;

        return (
            <TextField
                error={!errorData}
                {...this.getProps()}
            />
        );
    }
}

export default SingleBaseTextField;
