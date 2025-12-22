import {useContext} from "react";
import {FastStartContext} from "../../../styles/FastStartProvider.tsx";
import {SingleSelectOne} from "../../Single/Select/SingleSelectOne.tsx";
import {TextFieldProps} from "@mui/material";
import {MfsObjectSelectOneProps} from "../../../types";

export type ObjSelectOneProps<
    T extends object,
    Item
> = Omit<TextFieldProps, 'name'> & MfsObjectSelectOneProps<T, Item>;

const ObjSelectOne = <T extends object, Item>(props: ObjSelectOneProps<T, Item>) => {
    const defaultProps = useContext(FastStartContext)?.Object?.MfsSelectOne;
    const {

    } = defaultProps == null ? props : Object.assign({...defaultProps}, props);


    return (
        <SingleSelectOne
            variant={} items={} get={} set={}
        />
    )
}

export default ObjSelectOne;