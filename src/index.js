import { somar, getRandom} from "./modulos/math.js";
import "./modulos/hello.js";
import chalk from "chalk";
import {intro, outro, text} from "@clack/prompts";
import { fixedSum } from "./utils/fixed.js";
import { exec } from "./commands/public/exec.js"
import json from "..//person.json"  with { type: "json" }
import { writeFile, readFileSync, writeFileSync } from "node:fs"

function main() {
    const name = "João"

    const person = {
        name: "Felipe",
        age: 18,
        isProgrammer: true,
        inventory: {
            items: [
                {computer: "MacBook Air", os: "macos"},
                {computer: "samsung book 4", os: "linux mint"}
            ]
        }
    }

    const {name: username, inventory: {items: [{computer, os}]}} = person;

    console.log(username, computer);
}

main();

console.log(somar(5, 6));
console.log(getRandom());
console.log(chalk.red.underline("sakuragi"));
console.log(process.env.EMAIL);
console.log(fixedSum(8, 7));
console.log(exec("lucas"));

/*async function mainTwo() {
    intro(chalk.blue("Bem vindo ao programa!"));
    const nome = await text({ message: "Qual o seu nome? " })
    outro(`Olá ${nome}`);
}

mainTwo();*/

const person = {
    name: "lucas",
    age: 19,
    isProgrammer: true,
    greet() {
        console.log(this.name);
        
        const upper = () => {
            console.log(this.name.toUpperCase());
        }

        return { upper }
    }
}

person.greet().upper();

console.log(json);

const stringJson = JSON.stringify(person);
console.log(stringJson);

writeFileSync("./newperson.json", JSON.stringify(person, null, 2), "utf8");

const stringJsonn = readFileSync("./newperson.json", "utf8");

console.log(stringJson);

const jsonn = JSON.parse(stringJsonn);

console.log(jsonn.name);

console.log()
console.log()


async function request() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/2');
    const data = await response.json();
    console.log(data);
}

request()