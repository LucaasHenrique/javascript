import { readFile } from "node:fs/promises";


async function main() {
    let file;
    
    try {
        file = await readFile("/try.js");
        console.log(file.toString);
    } catch (error){
        file = error
        console.log("Não foi possivel ler o arquivo!")
    }
    
    console.log("Fim do programa!")
}

function upper(text) {
    if (typeof text !== "string") {
        throw new Error("O parametro esperado deve ser uma string!");
    }
    return text.toUpperCase();
}

try {
    console.log(upper(20));
} catch (err) {
    console.log("Falha na execução!", err);
}