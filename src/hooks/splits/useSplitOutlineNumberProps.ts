import type {OutlinedInputProps} from "@mui/material";
import type {SingleNumberProps, SingleOutlinedNumberProps} from "../../types";
import {useMemo, useState} from "react";
import {fastDeepMerge} from "../../utils";

const useSplitOutlineNumberProps = <T>(
    defaultProps: SingleOutlinedNumberProps,
    customProps: SingleOutlinedNumberProps,
    process: (value: string) => string,
    calculate: (value: string | null, min: number, max: number, def: number) => number,
    lockKeys: string[] = []
): OutlinedInputProps => {
    const [draft, setDraft] = useState<string | null>(null);
    const {
        get, set, errorData,
        minLength, maxLength,
        disappear, def, min, max, step,
        ...props
    } = useMemo(() =>
            fastDeepMerge<SingleOutlinedNumberProps>({...defaultProps}, customProps),
        [defaultProps, customProps]
    );

    // TODO
}
