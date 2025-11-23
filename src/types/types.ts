import type {Dispatch, SetStateAction} from "react";
import * as React from "react";

interface BaseProps<TYPE, ERROR> {
    get: TYPE;
    set: Dispatch<SetStateAction<TYPE>>;
    label?: React.ReactNode;
    errorData?: ERROR;
}

type BasePropertyProps<TYPE> = BaseProps<TYPE, string>;

interface NumberPropertyProps extends BasePropertyProps<number> {
    disappear?: boolean;
    default?: number;
    min?: number;
    max?: number;
    step?: number;
}


interface BaseObjectProps<TYPE extends object> extends BaseProps<TYPE, object> {
    name: keyof TYPE | string;
}


export type {
    BasePropertyProps,
    NumberPropertyProps,
    BaseObjectProps,
}