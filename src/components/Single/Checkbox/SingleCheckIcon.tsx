import type {SingleCheckIconProps} from "../../../types";
import {useCallback, useContext} from "react";
import {FastStartContext} from "../../../styles/FastStartProvider.tsx";
import {fastDeepMerge} from "../../../utils";
import {IconButton} from "@mui/material";

const SingleCheckIcon = (customProps: SingleCheckIconProps) => {
    const defaultProps = useContext(FastStartContext).Single.CheckIcon;
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

export default SingleCheckIcon;
