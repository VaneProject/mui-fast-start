import React from "react";
import type {BaseObjectProps} from "../../types";

abstract class ObjBase<TYPE extends object, RETURN, PROPS, STATE = unknown>
    extends React.Component<BaseObjectProps<TYPE> & PROPS, STATE> {

    protected constructor(props: BaseObjectProps<TYPE> & PROPS) {
        super(props);
        this.getValueByProps = this.getValueByProps.bind(this);
    }

    protected abstract getProps(): PROPS;

    protected get value(): RETURN {
        return this.getValueByProps(this.props);
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

    shouldComponentUpdate(nextProps: Readonly<BaseObjectProps<TYPE> & PROPS>): boolean {
        const prevProps = this.props;

        if (prevProps === nextProps) {
            return false;
        } else if (this.getValueByProps(prevProps) !== this.getValueByProps(nextProps)) {
            return true;
        }

        const prevKeys = Object.keys(prevProps);
        const nextKeys = Object.keys(nextProps);
        if (prevKeys.length !== nextKeys.length) {
            return true;
        }

        for (const key of prevKeys) {
            if (key === 'get') continue;
            if (prevKeys[key] !== nextKeys[key]) return true;
        }
        return false;
    }

    private readonly getValueByProps = (props: Readonly<BaseObjectProps<TYPE> & PROPS>): RETURN => {
        const {name, get} = props;
        return get[name as keyof TYPE] as RETURN;
    }
}

export default ObjBase;
