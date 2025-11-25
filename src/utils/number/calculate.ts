const floatCalculate = (value: string | null, min: number, max: number, def: number): number => {
    let calc: number = 0;
    if (value == null || isEmpty(value)) {
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

const integerCalculate = (value: string | null, min: number, max: number, def: number): number => {
    let calc: number = 0;
    if (value == null || isEmpty(value)) {
        calc = def;
    } else {
        for (const token of value.split(/(?=[+-])/g)) {
            if (/^[+-]?\d+$/.test(token)) {
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

const processFloat = (text: string): string => {
    const value: string = text
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
    return result + token;
}

const processInteger = (text: string): string => text
    .replace(/[^0-9+-]/g, '')
    .replace(/\./g, '')
    .replace(/([+-]){2,}/g, (match, op) => op.charAt(0))
    .replace(/^([+-]{2,})/, match => match.charAt(0));

function isEmpty(str: string): boolean {
    return str.length === 0 || !str.trim();
}

export {
    floatCalculate,
    integerCalculate,
    processFloat,
    processInteger
}
