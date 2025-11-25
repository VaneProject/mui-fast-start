import type {CheckboxProps, TextFieldProps, ThemeProviderProps} from "@mui/material";
import type {BaseNumberProps, BaseObjectProps, BasePropertyProps, BaseTextProps} from "./props.ts";

export type SingleNumberProps = TextFieldProps & BasePropertyProps<number> & BaseNumberProps;
export type SingleTextProps = TextFieldProps & BasePropertyProps<string> & BaseTextProps;
export type SingleCheckboxProps = CheckboxProps & BasePropertyProps<boolean>;

export type ObjCheckboxProps = BaseObjectProps<{ [key: string]: boolean }> & CheckboxProps;

interface FastStartDefaultProps {
    Single: {
        Float: SingleNumberProps;
        Integer: SingleNumberProps,
        Text: SingleTextProps,
        Checkbox: SingleCheckboxProps
    },
    Obj: {
        Checkbox: ObjCheckboxProps;
    }
}

interface FastStartProviderProps<Theme> extends ThemeProviderProps<Theme> {
    defaultPropsSingleNumberProps: FastStartDefaultProps;
}

export type {
    FastStartDefaultProps,
    FastStartProviderProps,
}
