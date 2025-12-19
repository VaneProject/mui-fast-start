import {useCallback, useContext} from "react";
import {IconButton, IconButtonProps} from "@mui/material";
import {FastStartContext} from "../../../styles/FastStartProvider.tsx";
import {MfsSingleCheckIconProps} from "../../../types";

export type SingleCheckIconProps = IconButtonProps & MfsSingleCheckIconProps;

export const SingleCheckIcon = (customProps: SingleCheckIconProps) => {
    const defaultProps = useContext(FastStartContext)?.Single?.MfsCheckIcon;
    const {
        get, set, on, off,
        ...props
    } = defaultProps == null
        ? customProps
        : Object.assign({...defaultProps}, customProps);

    const onClick = useCallback(() => set((state) => !state), [set]);

    return (
        <IconButton
            onClick={onClick}
            {...props}
        >
            {get ? on : off}
        </IconButton>
    )
}
