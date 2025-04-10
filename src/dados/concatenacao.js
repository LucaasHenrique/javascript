// operador + 

let saudacao = "Olá";
let nome = "Maria";
let mensagem = saudacao + ", " + nome + "!";
console.log(mensagem); // Saída: "Olá, Maria!"

// template literals
let saudacao1 = "Olá";
let nome1 = "Maria";
let mensagem1 = `${saudacao1}, ${nome1}!`;
console.log(mensagem1); // Saída: "Olá, Maria!"

// metodo .concat()
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const resultado = arr1.concat(arr2);
console.log(resultado); // [1, 2, 3, 4, 5, 6]
// tbm usado para strings

// Spread operator
let array1 = [1, 2, 3, 4];
let array2 = [5, 6, 7, 8];

let newArray = [...array1, ...array2];
console.log(newArray);
//

const numeros = [1, 2, 3];
const novoArray = [0, ...numeros, 4];

console.log(novoArray); // [0, 1, 2, 3, 4]
//

const obj1 = { nome: "Lucas", idade: 23 };
const obj2 = { ...obj1 };

console.log(obj2); // { nome: "Lucas", idade: 23 }
//

const endereco = { cidade: "São Paulo", estado: "SP" };
const usuario = { ...obj1, ...endereco };

console.log(usuario); 
// { nome: "Lucas", idade: 23, cidade: "São Paulo", estado: "SP" }


function soma(a, b, c) {
    return a + b + c;
}
  
const numeros1 = [1, 2, 3];
console.log(soma(...numeros1)); // 6
//


const palavra = "Hello";
const letras = [...palavra];

console.log(letras); // ["H", "e", "l", "l", "o"]
  
  