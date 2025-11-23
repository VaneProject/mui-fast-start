import type {Autocomplete, OutlinedInput, TextField} from "@mui/material";
import * as React from "react";

type TextFieldProps = React.ComponentProps<typeof TextField>;
type AutocompleteProps = React.ComponentProps<typeof Autocomplete>;
type OutlinedInputProps = React.ComponentProps<typeof OutlinedInput>;

export type {
    TextFieldProps,
    AutocompleteProps,
    OutlinedInputProps,
}