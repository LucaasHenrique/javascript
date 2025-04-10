const player = {
  nickname: "jp",
  health: 20,
  inventory: {
    items: ["sword", "shield", "bow"],
    potions: [
      {type: "regeneration", duration: 8},
      {type: "defense", duration: 8}
    ]
  }
}

//const {inventory, ...playerInfor } = player;
const playerInfor = {...player, inventory: undefined}
console.log(playerInfor);

/*
function updatePlayer(player, ...newProps) {
  return { ...player, ...newProps }
}

const updatedPlayer = updatePlayer(player, {
  nickname: "Lucas",
  coins: 90
})

console.log(updatedPlayer);*/

const person = { name: "Lucas", age: 22 }
const newPerson = { ...person, name: "" }

console.log(newPerson);

const positive = [1, 2, 3, 4, 5, 6];
const negative = [-1, -2, -4, -5];

const numbers = [...positive, ...negative];
console.log(numbers)

const [one, two, ...other] = numbers;
console.log(one, two);
console.log(other)