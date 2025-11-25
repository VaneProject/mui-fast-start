import type {DeepPartial} from "../../types";

type AnyObj = Record<string, any>;
function isPlainObject(v: any): v is AnyObj {
    return v !== null && typeof v === "object" && v.constructor === Object;
}

function fastDeepMerge<T extends object>(target: T, source: DeepPartial<T>): T {
    if (target === source) return target;
    if (!isPlainObject(target) || !isPlainObject(source)) {
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
    return target;
}



export {
    fastDeepMerge
}
