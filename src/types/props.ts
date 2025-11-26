import type {Autocomplete, OutlinedInput, SlotProps, TextFieldOwnerState} from "@mui/material";
import * as React from "react";
import type {InputBaseProps} from "@mui/material/InputBase";
import type {InputLabelProps} from "@mui/material/InputLabel";
import type {Dispatch, SetStateAction} from "react";
import type {SingleOutlinedNumberProps} from "./provider.ts";

type OutlinedInputProps = React.ComponentProps<typeof OutlinedInput>;
type HtmlInputType = SlotProps<React.ElementType<InputBaseProps['inputProps']>, {}, TextFieldOwnerState>;
type InputLabelType = SlotProps<React.ElementType<InputLabelProps>, {}, TextFieldOwnerState>;
type KeysWithValue<Type extends object, Target> = {
    [K in keyof Type]: Type[K] extends Target ? K : never
}[keyof Type];

interface BaseProps<Type, Error> {
    get: Type;
    set: Dispatch<SetStateAction<Type>>;
    label?: React.ReactNode;
    errorData?: Error;
}

type BasePropertyProps<TYPE> = BaseProps<TYPE, string>;

interface BaseObjectProps<Type extends object, Target>
    extends BaseProps<Type, Partial<Type> | object> {
    name: KeysWithValue<Type, Target> | string;
}

interface BaseTextProps {
    minLength?: number;
    maxLength?: number;
}

interface BaseCheckIconProps {
    on: React.ReactNode;
    off: React.ReactNode;
}

interface BaseNumberProps extends BaseTextProps {
    disappear?: boolean;
    def?: number;
    min?: number;
    max?: number;
    step?: number;
}

export type {
    KeysWithValue,
    OutlinedInputProps,
    HtmlInputType,
    InputLabelType,
    BasePropertyProps,
    BaseObjectProps,
    BaseTextProps,
    BaseCheckIconProps,
    BaseNumberProps,
}
