
const users = new Map();

users.set("lucas", {age: 19, coins: 40})
users.set("felipe", {age: 21, coins: 10})
users.set("joel", {age: 23, coins: 80})
users.set("Gabi", {age: 20, coins: 30})

console.log(users);
users.delete("felipe");

console.log(users);
console.log(users.size);
console.log(users.has("lucas"));
 

for (const [key, value] of users.entries()) {
    console.log("key: ", key);
    console.log("value: ", value);
}


for (const {age, coins} of users.values()) {
    console.log("age: ", age);
    console.log("coins: ", coins);
}