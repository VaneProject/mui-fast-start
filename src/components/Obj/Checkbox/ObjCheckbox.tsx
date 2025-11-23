import ObjBase from "../ObjBase.tsx";
import type {CheckboxProps} from "../../../types/props.ts";
import {Checkbox, FormControlLabel} from "@mui/material";
import React from "react";

class ObjCheckbox<TYPE extends object> extends ObjBase<TYPE, boolean, CheckboxProps> {
    override getProps(): CheckboxProps {
        return {
            size: 'small',
            ...this.props
        };
    }

    render() {
        const {
            label
        } = this.props;

        return label == null ? (
            <Checkbox
                checked={this.value}
                onChange={this.onClick}
                {...this.getProps()}
            />
        ) : (
            <FormControlLabel
                label={label}
                onChange={this.onClick}
                control={<Checkbox {...this.getProps()}/>}
            />
        );
    }

    private onClick = () => {
        this.value = !this.value;
    }
}

export default ObjCheckbox;