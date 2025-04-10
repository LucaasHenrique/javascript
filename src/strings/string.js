
const text = "Java"
const text2 = "Javascript"
const lang = `Linguagem ${text}` // template string

console.log(lang);

const result = `O resultado é ${8 + 3}`
console.log(result);

const person =  {
    name: "dev"
}

const obj = `Objeto: ${JSON.stringify(person)}`;
console.log(obj);

console.log(1 + 1);

const myName = "Lucas Dev";
console.log(myName.toUpperCase());
console.log(myName[0].toLowerCase());
console.log(myName.includes("o"))
console.log(myName.slice(0, 5));
const chars = myName.split("");
console.log(chars);
console.log(chars.join(""));
console.log(myName.replace("Dev", "Estagiario"));