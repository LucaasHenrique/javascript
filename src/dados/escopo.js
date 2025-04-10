// escopo global

var globalVar = "sou uma variável global";

function exemplo() {
    console.log(globalVar);
}

exemplo();

// -------------------------------------
// escopo local

function exemplo1() {
    var localVar = "sou uma variável local";
    console.log(localVar);
}

exemplo1()

//escopo de bloco

function exemplo2() {
    if (true) {
         let x = 5; // Tem escopo de bloco
    }
    //console.log(x); // Erro: variável não está disponível fora do bloco
}
exemplo2(); // Executa a função exemplo()

// hoisting de variáveis

console.log(x); // undefined
var x = 10;
console.log(x);

function exemplo3() {
    console.log(x); // Error: Cannot access 'x' before initialization
    let x = 10;
}
exemplo3(); // Executa a função exemplo()