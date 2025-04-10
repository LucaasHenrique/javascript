const numbers = [1, 2, 4, 6, 3, 7, 2, 20];
const names = ["Lucas", "Maria", "Felipe", "Jorge"]
numbers.unshift(3);

function quadrados(arr) {
    let quadrados = [];

    for (let i = 0; i < numbers.length; i++) {
        quadrados.push(numbers[i] ** 2);
    }
    return quadrados
}

const quad = quadrados();
quad.pop();
quad.shift()
console.log(quad);