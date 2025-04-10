import { somar } from "../modulos/math.js"

export function fixedSum(a, b) {
    const result = somar(a, b);
    return result.toFixed(2);
}