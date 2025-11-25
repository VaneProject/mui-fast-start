import SingleBase from "./SingleBase.tsx";
import type {SlotProps, TextFieldOwnerState, TextFieldProps} from "@mui/material";
import {TextField} from "@mui/material";
import React from "react";
import type {InputBaseProps} from "@mui/material/InputBase";
import type {InputLabelProps} from "@mui/material/InputLabel";
import type {HtmlInputType} from "../../types";


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

    protected abstract get htmlInput(): HtmlInputType;
    protected abstract get inputLabel(): SlotProps<React.ElementType<InputLabelProps>, {}, TextFieldOwnerState>;

    override render() {
        const {errorData} = this.props;

        return (
            <TextField
                error={!!errorData}
                slotProps={{
                    htmlInput: this.htmlInput,
                    inputLabel: this.inputLabel
                }}
                {...this.getProps()}
            />
        );
    }
}

export default SingleBaseTextField;
