import type {Dispatch, SetStateAction} from "react";
import * as React from "react";

interface BaseProps<TYPE, ERROR> {
    get: TYPE;
    set: Dispatch<SetStateAction<TYPE>>;
    label?: React.ReactNode;
    errorData?: ERROR;
}

interface NumberProps {
    disappear?: boolean;
    default?: number;
    min?: number;
    max?: number;
    step?: number;
}

type BasePropertyProps<TYPE> = BaseProps<TYPE, string>;


interface NumberPropertyProps extends BasePropertyProps<number>, NumberProps {}

interface BaseObjectProps<TYPE extends object> extends BaseProps<TYPE, object> {
    name: keyof TYPE | string;
}

interface NumberObjectProps<TYPE extends object> extends BaseObjectProps<TYPE>, NumberProps {}


export type {
    BasePropertyProps,
    NumberPropertyProps,
    BaseObjectProps,
    NumberObjectProps
}