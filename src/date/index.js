const date = new Date();

console.log(date);
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());

date.setHours(date.getHours() + 7);
console.log(date.toString());
console.log(date.toLocaleDateString());
console.log(date.toUTCString());
console.log(date.toISOString());

console.log();


/*const timer = setInterval(() => {
    const data = new Date();
    console.log(data.getSeconds());
    if (data.getSeconds() > 30) clearInterval(timer);
}, 500);*/

const past = new Date(2023, 11, 25);
const present = new Date();
const future = new Date(2025, 9, 28);

console.log(past.toLocaleString());
console.log(present.toLocaleString())
console.log(future.toLocaleString())


const dataPrazo = new Date(2025, 3, 7);


if (dataPrazo < present) {
    console.log("Prazo esgotado!")
}