
class Person {
    static persons = [];
    #name; //private
    #age;
    #money = 0;
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
        Person.persons.push(this)
    }

    intro() {
        return `Meu nome ${this.#name} e tenho ${this.#age} anos`;
    }

    getName() {
        return this.#name;
    }

    setMoney(value) {
        this.#money = value;
    }

    getMoney() {
        return this.#money;
    }

    incrementMoney(value) {
        this.setMoney(this.#money + value);
    }
}

const person = new Person("Lucas", 19);
const person1 = new Person("Maria", 20);
console.log(person.intro());
console.log(person.getName());

person.incrementMoney(180);
person.incrementMoney(30);
person.incrementMoney(40);

console.log(person.getMoney());

console.log(Person.persons);