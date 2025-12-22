import {MfsErrorProps, MfsObjectProps} from "../../types";
import {MfsObjectError} from "../../types/props.internal.ts";

function errorObjectToString<Type extends object, Target = unknown>(
    name: MfsObjectProps<Type, Target>['name'],
    data: MfsErrorProps<Type, MfsObjectError<Type, Target>>['err']
): string | undefined {
    return (name != null && typeof data === 'object')
        ? (data as Record<string, string>)[name as string]
        : undefined;
}

export {
    errorObjectToString
}
