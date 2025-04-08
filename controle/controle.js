const readline = require("readline-sync")

// if

let idade = readline.question("sua idade: ")
if (idade >= 18 && idade <= 60) {
    console.log("adulto")
} else if  (idade < 18){
    console.log("menor de idade!");
} else {
    console.log("idoso");
}

// switch
let dia = 2;

switch (dia) {
    case 1: 
        console.log("Segunda");
        break;
    case 2:
        console.log("Terça");
        break;
    case 3:
        console.log("Quarta");
        break;
    case 4:
        console.log("Quinta");
        break;
    case 5: 
        console.log("Sexta");
        break;
    default:
        console.log("Dia desconhecido!");
}


let fruta = "banana";
switch (fruta) {
    case "maçã":
        console.log("Você escolheu uma maçã.");
        break;
    case "banana":
        console.log("Você escolheu uma banana.");
        break;
    default:
        console.log("Fruta desconhecida.");
}
