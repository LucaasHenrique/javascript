function requestCar(drivers) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (drivers) {
                return resolve("Seu motorista está caminho!")
            }
            return reject("Não há motoristas disponíveis!")
        }, 3000);
    });
}

async function main() {
    let drivers = 0;

    const request = await requestCar(drivers).catch((msg) => msg);

    /*if (!request) {
        console.log("erro");
        return 
    }*/

    console.log(`Resultado ${request}`);
}

main();
console.log(5);

