// internal types
// Do not export index.ts

import React from "react";


export type KeysWithValue<Type extends object, Target = unknown> = {
    [K in keyof Type]: Type[K] extends Target ? K : never
}[keyof Type];

export type MfsObjectKeys<Type extends object, Target = unknown> =
    KeysWithValue<Type, Target> | string;

export type MfsSingleError = React.ReactNode;
export type MfsObjectError<Type extends object, Target = unknown> =
    Partial<Record<MfsObjectKeys<Type, Target>, React.ReactNode>>;
