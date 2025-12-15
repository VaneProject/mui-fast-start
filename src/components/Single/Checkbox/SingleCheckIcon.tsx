import {useCallback, useContext} from "react";
import {IconButton} from "@mui/material";
import {FastStartContext} from "../../../styles/FastStartProvider.tsx";
import {SingleCheckIconProps} from "../../../types";
import {fastDeepMerge} from "../../../utils";


export const SingleCheckIcon = (customProps: SingleCheckIconProps) => {
    const defaultProps = useContext(FastStartContext)?.Single?.CheckIcon;
    const {
        get, set, on, off,
        ...props
    } = fastDeepMerge<SingleCheckIconProps>(defaultProps, customProps);

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
