import type {BaseNumberProps} from "../../../types/types.ts";
import type {TextFieldProps} from "@mui/material";
import type {SlotProps} from "@mui/material/utils/types";
import type {InputBaseProps} from "@mui/material/InputBase";
import type {TextFieldOwnerState} from "@mui/material/TextField/TextField";
import {TextField} from "@mui/material";
import React from "react";
import SingleBaseNumber from "../SingleBaseNumber.tsx";
import {floatCalculate, numberFormat} from "../../../utils/calculate.ts";

class SingleFloat extends SingleBaseNumber<BaseNumberProps> {
    override getProps(): BaseNumberProps & TextFieldProps {
        return Object.assign({
            inputMode: 'decimal',
            type: 'text',
            step: 0.01,
            def: 0
        }, super.getProps());
    }

    override get htmlInput(): SlotProps<React.ElementType<InputBaseProps["inputProps"]>, {}, TextFieldOwnerState> {
        return Object.assign({
            onKeyDown: this.onKeyDown
        }, super.htmlInput);
    }

    override render() {
        const {errorData} = this.props;

        return (
            <TextField
                error={!errorData}
                slotProps={{
                    htmlInput: this.htmlInput,
                    inputLabel: this.inputLabel
                }}
                onSelect={this.onSelect}
                onChange={this.onChange}
                onBlur={this.onBlur}
                {...this.getProps()}
            />
        );
    }

    override getCalculate(value: string | null): number {
        const {min, max, def} = this.getProps();
        return floatCalculate(value, min, max, def);
    }

    override getKeyboardValue(event: React.KeyboardEvent<HTMLInputElement>): number {
        const {min, max, def} = this.getProps();
        const {value, valueAsNumber} = event.currentTarget;
        return isNaN(valueAsNumber) ? floatCalculate(value, min, max, def) : valueAsNumber;
    }

    override getProcess(event: React.ChangeEvent<HTMLInputElement>): string {
        return numberFormat(event);
    }
}

export default SingleFloat;
