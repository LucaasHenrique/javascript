for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break; // Sai do loop quando i é 3
    }
    console.log(i);
}

for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;
    }

    console.log(i);
}

function verificarMaioridade(idade) {
    if (idade >= 18) {
        return 'Maior de idade';
    }

    return 'Menor de idade';
}

console.log(verificarMaioridade(19));