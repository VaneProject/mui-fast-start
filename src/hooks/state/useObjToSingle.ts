import type {KeysWithValue} from "@/types";
import type {Dispatch, SetStateAction} from "react";
import {useCallback, useRef} from "react";

const useObjToSingle = <Type extends object, Target>(
    name: KeysWithValue<Type, Target> | string,
    get: Type,
    set: Dispatch<SetStateAction<Type>>
): [Target, Dispatch<SetStateAction<Target>>] => {
    const value: Target = (get as Record<string, Target>)?.[name as string];

    const setValue: Dispatch<SetStateAction<Target>> = useCallback((action: SetStateAction<Target>) => {
        set((state) => {
            const newValue = typeof action === "function"
                ? (action as (prev: Target) => Target)((state as Record<string, Target>)?.[name as string])
                : action;
            return ({ ...state, [name]: newValue });
        });
    }, [name, set]);
    return [value, setValue];
}

export default useObjToSingle;
