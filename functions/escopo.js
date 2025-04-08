// local
function minhaFuncao() {
    const x = 10; // Variável local ao escopo da função
    console.log(x);
}

minhaFuncao(); // Imprime 10
//console.log(x); Causa erro, pois `x` está no escopo da função

//escopo global

const y = 5;

function myFunction() {
    console.log(y);
}

myFunction();

// escopo de bloco

function bloco() {
    if (true) {
        let x = 10; // Escopo de bloco
        console.log(x); // Funciona
    }

    // console.log(x); // Causa erro, pois `x` está fora do escopo do bloco
}

//hoisting

function exemplo() {
    console.log(a); // undefined, por causa do hoisting da variável `var`
    var a = 10; // Declaração da variável
    console.log(a); // Imprime 10
}

// escopo léxico

function funExtena() {
    let ola = "Hello Word";
    
    function funInterna() {
        console.log(ola);
    }

    return funInterna;
}

const myFun = funExtena();
myFun();