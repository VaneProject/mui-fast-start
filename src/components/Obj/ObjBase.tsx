import React from "react";
import type {BaseObjectProps} from "../../types/types.ts";

abstract class ObjBase<TYPE extends object, RETURN, PROPS = unknown, STATE = unknown>
    extends React.Component<BaseObjectProps<TYPE> & PROPS, STATE> {

    protected abstract getProps(): PROPS;

    protected get value(): RETURN {
        const {name, get} = this.props;
        return get[name as keyof TYPE] as RETURN;
    }

    protected set value(value: RETURN) {
        const {
            name,
            get,
            set
        } = this.props;
        set({...get, [name]: value});
    }

    protected get error(): { error: boolean, text: string | null } {
        const {name, errorData} = this.props;
        const text = errorData == null ? null : errorData[name as string];
        return {error: !!text, text};
    }
}

export default ObjBase;