import './prototype.ts';
import React from "react";

const floatCalculate = (value: string | null, min: number, max: number, def: number) => {
    let calc: number = 0;
    if (value == null || value.isEmpty()) {
        calc = def;
    } else {
        for (const token of value.split(/(?=[+-])/g)) {
            if (/^[+-]?\d+\.\d+$/.test(token)) {
                calc += parseFloat(token);
            } else if (/^[+-]?\d+$/.test(token)) {
                calc += parseInt(token, 10);
            }
        }
    }

    if (max != null) {
        calc = Math.min(max, calc);
    }
    if (min != null) {
        calc = Math.max(min, calc);
    }
    return calc;
}

const numberFormat = (event: React.ChangeEvent<HTMLInputElement>): string => {
    const target = event.currentTarget;
    const value: string = target.value
        .replace(/[^0-9+.-]/g, '')
        .replace(/([+-]){2,}/g, (match, op) => op);

    let result: string = '';
    let token: string = '';
    let decimalUsed: boolean = false;

    for (let i = 0; i < value.length; i++) {
        const char = value[i];

        if (char >= '0' && char <= '9') {
            token += char;
        } else if (char === '.') {
            if (!decimalUsed) {
                if (token === '') {
                    token = '0';
                }
                token += '.';
                decimalUsed = true;
            }
        } else if (char === '+' || char === '-') {
            if (token !== '') {
                result += token;
            }
            result += char;
            token = '';
            decimalUsed = false;
        }
    }

    result += token;

    if (result != target.value) {
        target.value = result;
    }

    return result;
}

export {
    floatCalculate,
    numberFormat
}
