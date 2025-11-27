import type {CheckboxProps, IconButtonProps, TextFieldProps, ThemeProviderProps} from "@mui/material";
import type {BaseCheckIconProps, BaseNumberProps, BaseObjectProps, BasePropertyProps, BaseTextProps} from "./props.ts";
import type {DeepPartial} from "./types.ts";

export type SingleNumberProps = TextFieldProps & BaseNumberProps & BasePropertyProps<number>;
export type SingleTextProps = TextFieldProps & BaseTextProps & BasePropertyProps<string>;
export type SingleCheckboxProps = CheckboxProps & Omit<BasePropertyProps<boolean>, 'errorData'>;
export type SingleCheckIconProps = IconButtonProps & BaseCheckIconProps & Omit<BasePropertyProps<boolean>, 'errorData' | 'label'>;


export type ObjNumberProps<T extends object> = Omit<TextFieldProps, 'name'> & BaseNumberProps & BaseObjectProps<T, number>;
export type ObjTextProps<T extends object> = Omit<TextFieldProps, 'name'> & BaseTextProps & BaseObjectProps<T, string>;
export type ObjCheckboxProps<T extends object> = Omit<CheckboxProps, 'name'> & Omit<BaseObjectProps<T, boolean>, 'errorData'>;
export type ObjCheckIconProps<T extends object> = Omit<IconButtonProps, 'name'> & BaseCheckIconProps & Omit<BaseObjectProps<T, boolean>, 'errorData' | 'label'>;


type FastStartDefaultProps = DeepPartial<{
    Single: {
        Float: SingleNumberProps;
        Integer: SingleNumberProps;
        Text: SingleTextProps;
        Checkbox: SingleCheckboxProps;
        CheckIcon: SingleCheckIconProps;
    },
    Obj: {
        Float: ObjNumberProps<object>;
        Integer: ObjNumberProps<object>;
        Text: ObjTextProps<object>;
        Checkbox: ObjCheckboxProps<object>;
        CheckIcon: ObjCheckIconProps<object>;
    }
}>;

interface FastStartProviderProps<Theme> extends ThemeProviderProps<Theme> {
    defaultProps: FastStartDefaultProps;
}

export type {
    FastStartDefaultProps,
    FastStartProviderProps,
}
