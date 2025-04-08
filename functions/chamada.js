const Pessoa = {
    nome: "Carlos",
    cumprimentar() {
        console.log("Olá, eu sou " + this.nome);
    }
};

Pessoa.cumprimentar();

// chamada com new

function Carro(marca) {
    this.marca = marca;
}

const meuCarro = new Carro("Honda");
console.log(meuCarro.marca);

// callback

function executarComCallBack(callback) {
    console.log("Antes do callback");
    callback();
    console.log("Depois do Callback")
}

executarComCallBack(() => {
    console.log("Callback executado")
});

function processUserInput(callback) {
    let name = "Lucas";
    callback(name);
    console.log("loucura!")
}

function greet(name) {
    console.log("Hello, " + name);
}

processUserInput(greet);