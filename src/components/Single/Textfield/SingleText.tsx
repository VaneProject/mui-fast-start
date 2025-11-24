import SingleBaseTextField from "../SingleBaseTextField.tsx";
import type {BasePropertyProps, BaseTextProps} from "../../../types/types.ts";
import type {SlotProps, TextFieldOwnerState, TextFieldProps} from "@mui/material";
import React from "react";
import type {InputBaseProps} from "@mui/material/InputBase";
import type {InputLabelProps} from "@mui/material/InputLabel";

class SingleText extends SingleBaseTextField<string, BaseTextProps> {

    constructor(props: BasePropertyProps<string> & BaseTextProps & TextFieldProps) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    protected getProps(): BaseTextProps & TextFieldProps {
        return Object.assign({
            onChange: this.onChange
        }, super.getProps());
    }

    protected get htmlInput(): SlotProps<React.ElementType<InputBaseProps["inputProps"]>, {}, TextFieldOwnerState> {
        const {minLength, maxLength} = this.getProps();
        return {minLength, maxLength};
    }

    protected get inputLabel(): SlotProps<React.ElementType<InputLabelProps>, {}, TextFieldOwnerState> {
        return undefined;
    }

    protected onChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.value = event.currentTarget.value;
    }
}

export default SingleText;