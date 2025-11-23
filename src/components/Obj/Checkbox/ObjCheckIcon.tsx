import ObjBase from "../ObjBase.tsx";
import {IconButton, type IconButtonProps} from "@mui/material";
import React from "react";

type Props = IconButtonProps & {
    on: React.ReactNode,
    off: React.ReactNode
}

class ObjCheckIcon<TYPE extends object> extends ObjBase<TYPE, boolean, Props> {
    override getProps(): Props {
        return {
            size: 'small',
            onClick: this.onClick,
            ...this.props
        };
    }

    render() {
        const {on, off} = this.props;

        return (
            <IconButton {...this.getProps()}>
                {this.value ? on : off}
            </IconButton>
        );
    }

    private onClick = () => {
        this.value = !this.value;
    }
}

export default ObjCheckIcon;