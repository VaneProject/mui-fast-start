import type {BasePropertyProps} from "../../types";
import React from "react";

abstract class SingleBase<TYPE, PROPS, STATE = unknown>
    extends React.PureComponent<BasePropertyProps<TYPE> & PROPS, STATE> {

    protected abstract getProps(): PROPS;

    protected get value(): TYPE {
        return this.props.get;
    }

    protected set value(value: TYPE) {
        this.props.set(value);
    }
}

export default SingleBase;
