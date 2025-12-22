import {
    MfsCheckIconProps,
    MfsErrorProps,
    MfsLabelProps,
    MfsNumberProps,
    MfsObjectProps,
    MfsPropertyProps,
    MfsSelectOneProps,
    MfsSelectRecordProps,
    MfsTextProps
} from './props';
import {MfsObjectError, MfsSingleError} from "./props.internal.ts";


// Single
export interface MfsSingleNumberProps extends
    MfsNumberProps,
    MfsErrorProps<number, MfsSingleError> {}

export interface MfsSingleTextProps extends
    MfsTextProps,
    MfsErrorProps<string, MfsSingleError> {}

export type MfsSingleCheckboxProps =
    MfsLabelProps<boolean>;

export interface MfsSingleCheckIconProps extends
    MfsCheckIconProps,
    MfsPropertyProps<boolean> {}

export type MfsSingleSelectOneProps<Item> =
    MfsSelectOneProps<Item>
    & MfsErrorProps<Item, MfsSingleError>;

export interface MfsSingleSelectRecordProps<
    Item extends Record<PropertyKey, unknown>,
    Value = keyof Item | undefined | null
> extends
    MfsSelectRecordProps<Item>,
    MfsErrorProps<Value, MfsSingleError> {}


// Object
export interface MfsObjectNumberProps<T extends object> extends
    MfsObjectProps<T, number>,
    MfsNumberProps,
    MfsErrorProps<T, MfsObjectError<T, number>> {}

export interface MfsObjectTextProps<T extends object> extends
    MfsObjectProps<T, string>,
    MfsTextProps,
    MfsErrorProps<T, MfsObjectError<T, string>> {}

export interface MfsObjectCheckboxProps<T extends object> extends
    MfsObjectProps<T, boolean>,
    MfsLabelProps<T> {}

export interface MfsObjectCheckIconProps<T extends object> extends
    MfsObjectProps<T, boolean>,
    MfsPropertyProps<T>,
    MfsCheckIconProps {}

export type MfsObjectSelectOneProps<T extends object, Item> =
    MfsObjectProps<T, Item>
    & MfsSelectOneProps<Item>
    & MfsErrorProps<T, MfsObjectError<T, Item>>;

export interface MfsObjectSelectRecordProps<
    T extends object,
    Item extends Record<PropertyKey, unknown>
> extends
    MfsObjectProps<T, Item>,
    MfsSelectRecordProps<Item>,
    MfsErrorProps<T, MfsObjectError<T, Item>> {}