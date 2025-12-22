import * as React from "react";
import {Dispatch, HTMLAttributes, SetStateAction} from "react";
import {MfsObjectKeys} from "./props.internal.ts";


type KeysWithValue<Type extends object, Target> = {
    [K in keyof Type]: Type[K] extends Target ? K : never
}[keyof Type];

export interface MfsPropertyProps<Type> {
    get: Type;
    set: Dispatch<SetStateAction<Type>>;
}

export interface MfsObjectProps<Type extends object, Target> {
    name: MfsObjectKeys<Type, Target>;
}

// props : property + label
export interface MfsLabelProps<Type> extends MfsPropertyProps<Type> {
    label?: React.ReactNode;
}

// props : property + label + error
export interface MfsErrorProps<Type, Error> extends MfsLabelProps<Type> {
    err?: Error;
}

// ==================================================
// Component props
// ==================================================
export interface MfsTextProps {
    minLength?: number;
    maxLength?: number;
    startAdornment?: React.ReactNode;
    endAdornment?: React.ReactNode;
}

export interface MfsNumberProps extends MfsTextProps {
    inputMode?: HTMLAttributes<unknown>["inputMode"];
    type?: React.InputHTMLAttributes<unknown>['type'];
    def?: number | null | undefined;
    min?: number;
    max?: number;
    step?: number;
}

export interface MfsCheckIconProps {
    on: React.ReactNode;
    off: React.ReactNode;
}

export type MfsSelectOneProps<I> = {
    items: I[];
    renderMenuItem?: (item: I, i: number) => React.ReactNode;
    emptyItem?: React.ReactNode;
} & ([NonNullable<I>] extends [string | number]
    ? { getKey?: (item: I) => string | number }
    : { getKey: (item: I) => string | number });

export interface MfsSelectRecordProps<Item extends Record<PropertyKey, unknown>> {
    items: Item;
    renderMenuItem?: (key: keyof Item, value: Item[keyof Item], i: number) => React.ReactNode;
    emptyItem?: React.ReactNode;
}


interface BaseProps<Type, Error> {
    get: Type;
    set: Dispatch<SetStateAction<Type>>;
    label?: React.ReactNode;
    err?: Error;
}

interface BaseObjectProps<Type extends object, Target>
    extends BaseProps<Type, Partial<Type> | object> {
    name: KeysWithValue<Type, Target> | string;
}

export type {
    KeysWithValue,
    BaseObjectProps,
}
