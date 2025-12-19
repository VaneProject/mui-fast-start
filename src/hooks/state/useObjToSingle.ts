import type {Dispatch, SetStateAction} from "react";
import {useCallback} from "react";
import {MfsObjectKeys} from "../../types/props.internal.ts";

const useObjToSingle = <Type extends object, Target>(
    name: MfsObjectKeys<Type, Target>,
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
