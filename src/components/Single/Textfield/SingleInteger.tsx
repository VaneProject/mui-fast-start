import SingleBaseNumber from "../SingleBaseNumber.tsx";
import type {BaseNumberProps} from "../../../types/types.ts";
import React from "react";
import type {SlotProps, TextFieldProps, TextFieldOwnerState} from "@mui/material";
import type {InputBaseProps} from "@mui/material/InputBase";
import {TextField} from "@mui/material";
import {integerCalculate, processInteger} from "../../../utils/calculate.ts";

class SingleInteger extends SingleBaseNumber {
    override getProps(): BaseNumberProps & TextFieldProps {
        return Object.assign({
            inputMode: 'numeric',
            type: 'text',
            step: 1,
            def: 0
        }, super.getProps());
    }
    override get htmlInput(): SlotProps<React.ElementType<InputBaseProps["inputProps"]>, {}, TextFieldOwnerState> {
        return Object.assign({
            onKeyDown: this.onKeyDown
        }, super.htmlInput);
    }

    override render(): React.JSX.Element {
        const {
            error,
            ...props
        } = this.getProps();

        const value = this.state.isFocus ? null : this.value;

        return (
            <TextField
                error={!!error}
                helperText={error}
                value={value}
                slotProps={{
                    htmlInput: this.htmlInput,
                    inputLabel: this.inputLabel
                }}
                onSelect={this.onSelect}
                onChange={this.onChange}
                onBlur={this.onBlur}
                {...props}
            />
        );
    }

    protected getCalculate(value: string | null): number {
        const {min, max, def} = this.getProps();
        return integerCalculate(value, min, max, def);
    }

    protected getKeyboardValue(event: React.KeyboardEvent<HTMLInputElement>): number {
        const {min, max, def} = this.getProps();
        const {value, valueAsNumber} = event.currentTarget;
        return isNaN(valueAsNumber) ? integerCalculate(value, min, max, def) : valueAsNumber;
    }

    protected getProcess(event: React.ChangeEvent<HTMLInputElement>): string {
        const target = event.currentTarget;
        const value: string = processInteger(target.value);
        if (value != target.value) {
            target.value = value;
        }
        return value;
    }


    override onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
        if ([".", "e", "E"].includes(event.key)) {
            event.preventDefault();
            return null;
        }

        super.onKeyDown(event);
    }
}

export default SingleInteger;
