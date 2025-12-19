import {
    MfsCheckIconProps,
    MfsErrorProps,
    MfsLabelProps,
    MfsNumberProps,
    MfsObjectProps,
    MfsPropertyProps,
    MfsSelectListProps,
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

export interface MfsSingleSelectOneProps<T> extends
    MfsSelectListProps<T>,
    MfsErrorProps<T, MfsSingleError> {}


// Object
export interface MfsObjectNumberProps<T extends object> extends
    MfsNumberProps,
    MfsObjectProps<T, number>,
    MfsErrorProps<T, MfsObjectError<T, number>> {}

export interface MfsObjectTextProps<T extends object> extends
    MfsTextProps,
    MfsObjectProps<T, string>,
    MfsErrorProps<T, MfsObjectError<T, string>> {}

export interface MfsObjectCheckboxProps<T extends object> extends
    MfsLabelProps<T>,
    MfsObjectProps<T, boolean> {}

export interface MfsObjectCheckIconProps<T extends object> extends
    MfsPropertyProps<T>,
    MfsCheckIconProps,
    MfsObjectProps<T, boolean> {}

