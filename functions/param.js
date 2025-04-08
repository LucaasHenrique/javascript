// passagem por referência

function alterarPropriedade(obj) {
    obj.name = "Maria"
}

let pessoa = {
    name: "Joao"
};

alterarPropriedade(pessoa);
console.log(pessoa);

// valor padrão
function saudar(nome="visitante") {
    console.log("Olá, " + nome + "!");
}

saudar();
saudar("Ana");

// parâmetros rest

function somar(...numeros) {
    return numeros.reduce((acc, cur) => acc + cur, 0);
}

console.log(somar(1, 2, 3)); // Retorna 6
console.log(somar(5, 10, 15, 20)); // Retorna 50

function mostrar(nome, ...outros) {
    console.log("Nome: " + nome);
    console.log("Outros: " + outros);
}

mostrar("Lucas", "Joao", "Maria", "Valetina", "Cecilha");

