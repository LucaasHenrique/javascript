simpleValue = "Esta também é uma variável global";

var global = "Esta também é uma variável global";
{ 
    let blockScopedVar = "variável local de escopo de bloco";
}


// keyword var
var x = 10 // global
function exemplo() {
    var y = 20; // escopo local
}

// keyword let
let x1 = 10; // Escopo global ou do bloco em que é declarada
if (x1 > 5) {
    let y1 = 20; // Escopo restrito ao bloco 'if'
}

var a;
console.log("valor de a é " + a);
//console.log("o valor de b é " + b);

//constantes
const minhaConstante = 42;
console.log(minhaConstante);

const x3 = 10;
//x3 = 20; //erro

const arr = [1, 2, 3, 4];
arr.push(4); // Permitido: referência não muda, mas o conteúdo do array sim