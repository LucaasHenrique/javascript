import { fixedSum } from "../../utils/fixed.js"

export function exec(name) {

    console.log(`${name} executou uma função`)
    console.log(fixedSum(7, 8))
}