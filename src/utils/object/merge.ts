import type {DeepPartial} from "../../types";

type AnyObj = Record<string, any>;
function isPlainObject(v: any): v is AnyObj {
    return v !== null && typeof v === "object" && v.constructor === Object;
}

function isEmpty(v: object): boolean {
    return Object.keys(v).length === 0;
}

function fastDeepMerge<T extends object>(target: DeepPartial<T>, source: T): T {
    if (target === source || !isPlainObject(source) || isEmpty(source)) {
        return target as T;
    } else if (!isPlainObject(target) || isEmpty(target)) {
        return source;
    }

    const stack: [AnyObj, AnyObj][] = [[target as AnyObj, source as AnyObj]];
    while (stack.length) {
        const [tNode, sNode] = stack.pop()!;

        for (const key in sNode) {
            if (!Object.prototype.hasOwnProperty.call(sNode, key)) continue;

            const sVal = sNode[key];
            const tVal = tNode[key];

            if (isPlainObject(tVal) && isPlainObject(sVal)) {
                stack.push([tVal, sVal]);
            } else {
                tNode[key] = sVal;
            }
        }
    }
    return target as T;
}



export {
    fastDeepMerge
}
