import { text } from "@clack/prompts";

const numbers = new Set([1, 2, 5, 3, 8, 12, 50]);
console.log(numbers);

numbers.delete(12);
console.log(numbers);

console.log(numbers.has(5));
console.log(numbers.size);

for (const element of numbers.values()) {
    console.log(element);
}
numbers.clear()


async function main() {
    const input = await text({ message: "Digite vários números" })
    const inputNumbers = input.split(" ").map(Number);
    const numbers = new Set(inputNumbers);

    console.log(inputNumbers);
    console.log(numbers);
}

main()