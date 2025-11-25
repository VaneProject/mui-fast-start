import type {Autocomplete, OutlinedInput, SlotProps, TextFieldOwnerState} from "@mui/material";
import * as React from "react";
import type {InputBaseProps} from "@mui/material/InputBase";
import type {InputLabelProps} from "@mui/material/InputLabel";
import type {Dispatch, SetStateAction} from "react";

type AutocompleteProps = React.ComponentProps<typeof Autocomplete>;
type OutlinedInputProps = React.ComponentProps<typeof OutlinedInput>;
type HtmlInputType = SlotProps<React.ElementType<InputBaseProps['inputProps']>, {}, TextFieldOwnerState>;
type InputLabelType = SlotProps<React.ElementType<InputLabelProps>, {}, TextFieldOwnerState>;

interface BaseProps<TYPE, ERROR> {
    get: TYPE;
    set: Dispatch<SetStateAction<TYPE>>;
    label?: React.ReactNode;
    errorData?: ERROR;
}

interface BaseObjectProps<TYPE extends object> extends BaseProps<TYPE, object> {
    name: keyof TYPE | string;
}

interface BaseTextProps {
    minLength?: number;
    maxLength?: number;
}

interface BaseNumberProps extends BaseTextProps {
    disappear?: boolean;
    def?: number;
    min?: number;
    max?: number;
    step?: number;
}

type BasePropertyProps<TYPE> = BaseProps<TYPE, string>;

export type {
    AutocompleteProps,
    OutlinedInputProps,
    HtmlInputType,
    InputLabelType,
    BasePropertyProps,
    BaseObjectProps,
    BaseTextProps,
    BaseNumberProps
}
