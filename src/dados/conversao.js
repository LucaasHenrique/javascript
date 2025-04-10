// conversao implícita

let num = 10;
let str = "o numero é: " + num;
console.log(str);

let x = "10";
let y = x * 2;
console.log(y);

let a = 10;
let b = "10";
console.log(a == b);

// conversão explícita

let str1 = "10";
let num1 = parseInt(str1);
console.log(num1);

let str2 = "3.14";
let num2 = parseFloat(str2);
console.log(num2);

let num3 = 42;
let str3 = String(num3)
console.log(num3);

let str4 = "42"
let num4 = Number(str4);
console.log(num4);