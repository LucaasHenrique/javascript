function perfome(name, exec) {
    const title = "Curso de nodejs"
    console.log(name, "executou uma função");
    exec(title);
}


perfome("lucas", (title) => {
    console.log("O título é ", title)
})

const numbers = [3, 5, 6, 7, 100, 356, 405, 404, 201];

const filtered = numbers.filter((number) => number > 100);
console.log(filtered);

function perf(exec) {
    const numbers = [3, 5, 6, 7, 100, 356, 405, 404, 201];
    for (const number of numbers) {
        exec(number ** 2);
    }
}

perf((number) => console.log(number));

function filter(array, callback) {
    const filtered = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            filtered.push(array[i]);
        }
    }

    return filtered;
}

const names = ["Rafael", "Miguel", "Juliano", "Maria", "Eduarda"];
const filteredNames = filter(names, (name) => name.startsWith("M"));
console.log(filteredNames);

names.forEach((item) => {
    console.log(item)
})

setTimeout(() => {
    console.log("Hello")
}, 2000);

let cont = 0;

const timer = setInterval(() => {
    if (cont > 10) {
        clearInterval(timer);
        return;
    } 
    console.log(cont);
    cont++
}, 2000);
