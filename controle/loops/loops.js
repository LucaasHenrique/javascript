// for

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

let frutas = ['Maça', 'Banana', 'Laranja'];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

for (let i = 0; i < 10; i += 2) {
    console.log(i); // Imprime os valores de 0 a 8 (pulando de 2 em 2)
}

for (let i = 5; i > 0; i--) {
    console.log(i); // Imprime os valores de 5 a 1 (em ordem decrescente)
}

// while

let i = 1;
while (i < 10) {
    console.log(i);
    i++
}

// do while

let cont = 0;
do {
    console.log(cont);
    cont++;
} while (cont < 5);