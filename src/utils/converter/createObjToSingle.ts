import type {KeysWithValue} from "../../types";
import type {Dispatch, SetStateAction} from "react";
import {useCallback} from "react";

const createObjToSingle = <Type extends object, Target>(
    name: KeysWithValue<Type, Target> | string,
    get: Type,
    set: Dispatch<SetStateAction<Type>>
): [Target, Dispatch<SetStateAction<Target>>] => {
    const value: Target = get?.[name];
    const setValue: Dispatch<SetStateAction<Target>> = useCallback((action: SetStateAction<Target>) => {
        set((state) => ({
            ...state,
            [name]: typeof action === "function" ? action(state?.[name]) : action
        }));
    }, [name, set]);
    return [value, setValue];
}

export {
    createObjToSingle
};
