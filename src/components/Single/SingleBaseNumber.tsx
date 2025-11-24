import SingleBaseTextField from "./SingleBaseTextField.tsx";
import React from "react";
import type {InputBaseProps} from "@mui/material/InputBase";
import type {InputLabelProps} from "@mui/material/InputLabel";
import type {SlotProps, TextFieldOwnerState, TextFieldProps} from "@mui/material";
import type {BaseNumberProps, BasePropertyProps} from "../../types/types.ts";

abstract class SingleBaseNumber extends SingleBaseTextField<number, BaseNumberProps, {
    isFocus: boolean
}> {
    constructor(props: BasePropertyProps<number> & BaseNumberProps & TextFieldProps) {
        super(props);
        this.onSelect = this.onSelect.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    override state = {
        isFocus: false
    }

    protected abstract getKeyboardValue(event: React.KeyboardEvent<HTMLInputElement>): number;
    protected abstract getCalculate(value: string | null): number;
    protected abstract getProcess(event: React.ChangeEvent<HTMLInputElement>): string;

    override get htmlInput(): SlotProps<React.ElementType<InputBaseProps["inputProps"]>, {}, TextFieldOwnerState> {
        const {step, min, max, minLength, maxLength} = this.props;

        return {step, min, max, minLength, maxLength};
    }

    override get inputLabel(): SlotProps<React.ElementType<InputLabelProps>, {}, TextFieldOwnerState> {
        const value: number | null = this.state.isFocus ? null : this.value;

        return (value == null || isNaN(value)) ? {} : {
            shrink: true
        }
    }


    protected onSelect() {
        this.setState({ isFocus: true });
    }

    protected onChange(event: React.ChangeEvent<HTMLInputElement>) {
        const result: string = this.getProcess(event);
        const num: number = this.getCalculate(result);

        if (!isNaN(num) && this.value != num) {
            this.value = num;
        }
    }

    protected onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
        const input = event.currentTarget;
        const {max, min, step} = this.getProps();

        if (event.key === "ArrowUp") {
            event.preventDefault();
            let num: number = this.getKeyboardValue(event);
            if (max != null && num > max) {
                num = max;
            }
            input.value = digitRound(num + step, step).toString();
        } else if (event.key === "ArrowDown") {
            event.preventDefault();
            let num: number = this.getKeyboardValue(event);
            if (min != null && num < min) {
                num = min;
            }
            input.value = digitRound(num - step, step).toString();
        }
    }

    protected onBlur(event: React.FocusEvent<HTMLInputElement>) {
        const {value} = event.currentTarget;

        this.setState({ isFocus: false });
        const num: number = this.getCalculate(value);
        if (this.value != num) {
            this.value = num;
        }
    }
}

const digitCount = (step: number) => {
    step = Math.abs(step);
    if (step === 0) return 1;
    return Math.floor(Math.log10(step));
}

const digitRound = (num: number, step: number) => {
    const decimals: number = -digitCount(step);
    if (decimals > 0) {
        return Number(Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals));
    }
    return num;
}

export default SingleBaseNumber;
