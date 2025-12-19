import type {TextFieldProps} from "@mui/material";
import {fastDeepMerge, floatCalculate, integerCalculate, processFloat, processInteger} from "../../utils";
import React, {useCallback, useState} from "react";
import {MfsSingleNumberProps} from "../../types";
import {SingleNumberProps} from "../../components/Single/TextField/SingleNumber.tsx";

type CalculateNumber = number | null | undefined;
type CalculateFunction = (
    value: string | null,
    min: CalculateNumber,
    max: CalculateNumber,
    def: CalculateNumber
) => CalculateNumber;

const useSplitNumberProps = (
    defaultProps: Partial<MfsSingleNumberProps> | undefined,
    customProps: SingleNumberProps,
    process: (value: string) => string,
    calculate: CalculateFunction,
    lockKeys: string[] = []
): TextFieldProps => {
    const [draft, setDraft] = useState<string | null>(null);
    const {
        get, set, err,
        minLength, maxLength,
        startAdornment, endAdornment,
        def, min, max, step,
        ...props
    } = (defaultProps == null)
        ? customProps
        : Object.assign({...defaultProps}, customProps);

    const getCalculate = (
        value: string | null
    ) => calculate(value, min, max, def);

    const getKeyboardValue = (
        event: React.KeyboardEvent<HTMLInputElement>
    ) => {
        const {value, valueAsNumber} = event.currentTarget;
        return isNaN(valueAsNumber) ? getCalculate(value) : valueAsNumber;
    }

    const getProcess = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>): string => {
            const target = event.currentTarget;
            const value: string = process(target.value);
            if (value != target.value) {
                target.value = value;
            }
            return value;
        },
        [process]
    );

    const onSelect = () => {
        if (draft == null) setDraft(get.toString());
    };

    const onChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const result: string = getProcess(event);
        const num: CalculateNumber = getCalculate(result);
        if (num != null && !isNaN(num) && get != num) {
            set(num);
        }

        setDraft(event.currentTarget.value);
    }

    const onBlur = (
        event: React.FocusEvent<HTMLInputElement>
    ) => {
        const {value} = event.currentTarget;

        setDraft(null);
        const num: CalculateNumber = getCalculate(value);
        if (get != num) set(num as number);
    };

    const onKeyDown = (
        event: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (lockKeys.includes(event.key) || step == null) {
            event.preventDefault();
            return;
        }

        const input = event.currentTarget;
        if (event.key === "ArrowUp") {
            event.preventDefault();
            const calNum: CalculateNumber = getKeyboardValue(event);
            if (calNum == null) return;

            const num: number = calNum + step;
            if (max != null && num > max) {
                input.value = max.toString();
            } else {
                input.value = digitRound(num, step).toString();
            }
        } else if (event.key === "ArrowDown") {
            event.preventDefault();
            const calNum: CalculateNumber = getKeyboardValue(event);
            if (calNum == null) return;

            const num: number = calNum - step;
            if (min != null && num < min) {
                input.value = min.toString();
            } else {
                input.value = digitRound(num, step).toString();
            }
        }
    };
    
    return fastDeepMerge<TextFieldProps>({
        error: !!err,
        helperText: err,
        value: (draft == null ? get : draft),
        onChange,
        onSelect,
        onBlur,
        slotProps: {
            htmlInput: {step, min, max, minLength, maxLength, onKeyDown},
            inputLabel: (draft == null && (!get || isNaN(get))) ? {} : { shrink: true },
            input: {startAdornment, endAdornment}
        }
    }, (props as TextFieldProps));
}

const digitRound = (num: number, step: number) => {
    step = Math.abs(step);
    if (step === 0) return num;
    const decimals: number = -Math.floor(Math.log10(step));
    if (decimals > 0) {
        return Number(Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals));
    }
    return num;
}

const useSplitSingleFloatProps = (
    defaultProps: Partial<MfsSingleNumberProps> | undefined,
    customProps: SingleNumberProps,
): TextFieldProps => useSplitNumberProps(
    defaultProps, customProps,
    processFloat, floatCalculate
);

const useSplitSingleIntegerProps = (
    defaultProps: Partial<MfsSingleNumberProps> | undefined,
    customProps: SingleNumberProps,
): TextFieldProps => useSplitNumberProps(
    defaultProps, customProps,
    processInteger, integerCalculate,
    [".", "e", "E"]
)

export {
    useSplitSingleFloatProps,
    useSplitSingleIntegerProps
};
