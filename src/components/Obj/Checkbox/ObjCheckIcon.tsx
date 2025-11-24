import ObjBase from "../ObjBase.tsx";
import {IconButton, type IconButtonProps} from "@mui/material";
import React from "react";

type ObjCheckIconProps = IconButtonProps & {
    on: React.ReactNode,
    off: React.ReactNode
}

class ObjCheckIcon<TYPE extends object> extends ObjBase<TYPE, boolean, ObjCheckIconProps> {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    override getProps(): ObjCheckIconProps {
        return Object.assign({
            size: 'small',
            onClick: this.onClick
        }, this.props);
    }

    render() {
        const {on, off} = this.props;

        return (
            <IconButton {...this.getProps()}>
                {this.value ? on : off}
            </IconButton>
        );
    }

    private readonly onClick = () => {
        this.value = !this.value;
    }
}

export default ObjCheckIcon;
