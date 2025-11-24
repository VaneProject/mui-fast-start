import type {Dispatch, SetStateAction} from "react";
import * as React from "react";

interface BaseProps<TYPE, ERROR> {
    get: TYPE;
    set: Dispatch<SetStateAction<TYPE>>;
    label?: React.ReactNode;
    errorData?: ERROR;
}

interface BaseTextProps {
    minLength?: number;
    maxLength?: number;
}

interface BaseNumberProps extends BaseTextProps {
    disappear?: boolean;
    def?: number;
    min?: number;
    max?: number;
    step?: number;
}

type BasePropertyProps<TYPE> = BaseProps<TYPE, string>;

interface BaseObjectProps<TYPE extends object> extends BaseProps<TYPE, object> {
    name: keyof TYPE | string;
}


export type {
    BasePropertyProps,
    BaseObjectProps,
    BaseTextProps,
    BaseNumberProps
}
