// hoisting em functions

const res = square(5);
console.log(res);

function square(numero) {
    return numero * numero;
}

// ----------------------------------
// functions em variávies

const somar = function(a, b) {
    return a + b;
}

console.log(somar(5, 6));

// ----------------------------------
function getRandom() {
    return Math.random() * (10 - 1) + 1; 
}

console.log(getRandom());
// ----------------------------------

/// anonimas e nomeadas

const multiplicar = function(a, b) {
    return a * b;
}

console.log(multiplicar(5, 6))

const fatorial = function fat(x) {
    return x < 2 ? 1 : x * fat(x - 1);
}

console.log(fatorial(5));
// -----------------------------------------

//arrow functions
const ola = () => console.log("Olá, mundo");

const saudar = nome => console.log("Olá, " + nome + "!");

const somar1 = (a, b) => a + b;

ola();
console.log(somar1(5, 6));

//-----------------------------------------

const quadrado = x => x * x;
console.log(quadrado(5));

const calcular = (a, b) => {
    const res = a + b;
    return res;
};

console.log(calcular(10, 9));

// ----------------------------------

function Pessoa () {
    this.idade = 0;
    setInterval(() => {
        this.idade++;
        console.log(this.idade);
    }, 2000);
}

// ------------------------------

function criarContador() {
    let cont = 0;
    return () => {
        cont++;
        return cont;
    }
}


const contador = criarContador();
console.log(contador()); // Retorna 1
console.log(contador()); // Retorna 2


const soma = (a, b) => a + b;

console.log(soma(5, 6));


const fatorial1 = (number) => {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }

    return result;
}

console.log(fatorial1(5));

((name) => {
    console.log("seu nome: " + name);
})("lucas");


function createTag(name, prefix, suffix) {
    if (prefix && suffix) {
        return `${prefix} ${name} ${suffix}`
    } 
    if (prefix) {
        return `${prefix} ${name}`
    }
    return name;
}

const tag = createTag("Lucas");
console.log(tag);

function greet(name, log=false) {
    const text = `Seja bem vindo(a) ${name}`;
    if (log) {
        console.log(text);
        return;
    }

    return text;
}

const text = greet("lucas", true)
console.log(text);