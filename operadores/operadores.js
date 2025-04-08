// igualdede estrita -> sem conversao de tipo
let x = 5;
let y = 6;
console.log(x === "5");

// desigualdede estrita -> sem conversao de tipo
console.log(x !== "5");

// operador bit a  bit
console.log(5 & 1);

console.log(5 | 1);

console.log(5 ^ 1);

let x1 =~ 5;
console.log(x1);

console.log(5 << 1);

console.log(5 >> 1);

console.log(5 >>> 1);

//operador lógico

// &&
console.log(x < 10 && y > 1);

// ||
console.log(x === 5 || y === 1);

// NOT

console.log(!(5 === 5));

let t1 = "bom";
let t2 = "dia";
let t3 = "";

t3 = t1 + t2; 

t1 += t2;

console.log(t3);    
console.log(t1);


// operador ternario
// condição ? valor1 : valor2

let a = 10;
let b = 5;

let maior = (a > b) ? a : b;
console.log(maior);

const learnedJs = true;
const withNode = false;

console.log(
    learnedJs && withNode
    ? "Aprendeu Js com node"
    : learnedJs ? "Aprendeu Js" : "Não aprendeu Js"
);