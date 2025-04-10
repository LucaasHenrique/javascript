import { setTimeout } from "node:timers/promises";
import { text } from "@clack/prompts"

// retorna uma promise e não um number
async function getNumber() {
    return 5;
}

async function main() {
    const name = await text({message: "Digite seu nome! "})
    const age = await text({message: `Digite sua idade ${name}!`})

    console.log("Seja bem vindo(a)", name);
}

main();