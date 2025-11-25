import type {SingleNumberProps} from "../../types";
import type {TextFieldProps} from "@mui/material";
import {fastDeepMerge, floatCalculate, integerCalculate, processFloat, processInteger} from "../../utils";
import React, {useCallback, useMemo, useState} from "react";

const useSplitSingleNumberProps = (
    defaultProps: SingleNumberProps,
    customProps: SingleNumberProps,
    process: (value: string) => string,
    calculate: (value: string | null, min: number, max: number, def: number) => number,
    lockKeys: readonly string[] = []
): TextFieldProps => {
    const [isFocus, setIsFocus] = useState<boolean>(false);
    const {
        get, set, errorData,
        minLength, maxLength,
        disappear, def, min, max, step,
        ...props
    } = useMemo(() => 
        fastDeepMerge<SingleNumberProps>({...defaultProps}, customProps),
        [defaultProps, customProps]
    );

    const onSelect = useCallback(() => setIsFocus(true), []);

    const getCalculate = useCallback((value: string | null) => (
        calculate(value, min, max, def)
    ), [calculate, min, max, def]);

    const getKeyboardValue = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
        const {value, valueAsNumber} = event.currentTarget;
        return isNaN(valueAsNumber) ? getCalculate(value) : valueAsNumber;
    }, [getCalculate]);

    const getProcess = useCallback((event: React.ChangeEvent<HTMLInputElement>): string => {
        const target = event.currentTarget;
        const value: string = process(target.value);
        if (value != target.value) {
            target.value = value;
        }
        return value;
    }, [process]);


    const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const result: string = getProcess(event);
        const num: number = getCalculate(result);

        if (!isNaN(num) && get != num) set(num);
    }, [getProcess, getCalculate, set, get]);

    const onBlur = useCallback((event: React.FocusEvent<HTMLInputElement>) => {
        const {value} = event.currentTarget;

        setIsFocus(false);
        const num: number = getCalculate(value);
        if (get != num) set(num);
    }, [getCalculate, get, set]);

    const onKeyDown = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
        if (lockKeys.includes(event.key)) {
            event.preventDefault();
            return;
        }

        const input = event.currentTarget;
        if (event.key === "ArrowUp") {
            event.preventDefault();
            let num: number = getKeyboardValue(event) + step;
            if (max != null && num > max) {
                input.value = max.toString();
            } else {
                input.value = digitRound(num, step).toString();
            }
        } else if (event.key === "ArrowDown") {
            event.preventDefault();
            let num: number = getKeyboardValue(event) - step;
            if (min != null && num < min) {
                input.value = min.toString();
            } else {
                input.value = digitRound(num, step).toString();
            }
        }
    }, [getKeyboardValue, max, min, step]);

    const value: number | null = isFocus ? null : get;
    return fastDeepMerge<TextFieldProps>({
        value,
        onChange,
        onSelect,
        onBlur,
        slotProps: {
            htmlInput: {step, min, max, minLength, maxLength, onKeyDown},
            inputLabel: (value == null || isNaN(value)) ? {} : { shrink: true }
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
    defaultProps: SingleNumberProps,
    customProps: SingleNumberProps,
): TextFieldProps => useSplitSingleNumberProps(
    defaultProps, customProps,
    processFloat, floatCalculate
);

const useSplitSingleIntegerProps = (
    defaultProps: SingleNumberProps,
    customProps: SingleNumberProps,
): TextFieldProps => useSplitSingleNumberProps(
    defaultProps, customProps,
    processInteger, integerCalculate,
    [".", "e", "E"]
)

export {
    useSplitSingleFloatProps,
    useSplitSingleIntegerProps
};
