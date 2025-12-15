import {BaseObjectProps, KeysWithValue} from "../../types";

function errorObjectToString<Type extends object, Target>(
    name: KeysWithValue<Type, Target> | string | undefined,
    data: BaseObjectProps<Type, Target>['errorData']
): string | undefined {
    return (name != null && typeof data === 'object')
        ? (data as Record<string, string>)[name as string]
        : undefined;
}

export {
    errorObjectToString
}
