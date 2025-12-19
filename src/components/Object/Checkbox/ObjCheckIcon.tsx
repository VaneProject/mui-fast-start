import {useContext} from "react";
import useObjToSingle from "../../../hooks/state/useObjToSingle.ts";
import {SingleCheckIcon} from "../../Single/Checkbox/SingleCheckIcon.tsx";
import {FastStartContext} from "../../../styles/FastStartProvider.tsx";
import {IconButtonProps} from "@mui/material";
import {MfsObjectCheckIconProps} from "../../../types";

export type ObjCheckIconProps<T extends object> = Omit<IconButtonProps, 'name'> & MfsObjectCheckIconProps<T>;

export const ObjCheckIcon = <T extends object>(customProps: ObjCheckIconProps<T>) => {
    const defaultProps = useContext(FastStartContext)?.Object?.MfsCheckIcon;
    const {
        get, set, name,
        ...props
    } = defaultProps == null
        ? customProps
        : Object.assign({...defaultProps}, customProps);

    const [value, setValue] = useObjToSingle<T, boolean>(name, get, set);

    return (
        <SingleCheckIcon
            get={value} set={setValue}
            name={name?.toString()}
            {...props}
        />
    );
}
