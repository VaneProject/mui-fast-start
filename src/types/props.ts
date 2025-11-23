import type {Autocomplete, Checkbox, IconButton, OutlinedInput, TextField} from "@mui/material";
import * as React from "react";

type CheckboxProps = React.ComponentProps<typeof Checkbox>;
type TextFieldProps = React.ComponentProps<typeof TextField>;
type AutocompleteProps = React.ComponentProps<typeof Autocomplete>;
type OutlinedInputProps = React.ComponentProps<typeof OutlinedInput>;
type IconButtonProps = React.ComponentProps<typeof IconButton>;

export type {
    CheckboxProps,
    TextFieldProps,
    AutocompleteProps,
    OutlinedInputProps,
    IconButtonProps
}