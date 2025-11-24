import SingleBase from "../SingleBase.tsx";
import {Checkbox, type CheckboxProps, FormControlLabel} from "@mui/material";
import React from "react";

class SingleCheckbox extends SingleBase<boolean, CheckboxProps> {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    override getProps(): CheckboxProps {
        return Object.assign({
            size: 'small'
        }, this.props);
    }

    render() {
        const {label} = this.props;
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

    private readonly onClick = () => {
        this.value = !this.value;
    }
}

export default SingleCheckbox;
