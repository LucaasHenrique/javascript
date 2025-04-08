const player = {
    nickname: "jorge",
    health: 20,
    isDead: false,

    present() {
        console.log("Meu nick é", this.nickname)
    }
}

console.log(player);
player.present()

for (prop in player)  {
    console.log(prop);
}

/// 
const ramMemory = {
    name: "HyperX",
    size: 16000
}

const computer = {
    motherboard: "B360M",
    videoCard: "RTX 2070",
    cpu: "Intel i7 8700",
    font: {
        name: "XPG",
        watts: 800
    },
    case: {
        name: "Draco GameMax",
        color: "Black"
    },
    ram: [ramMemory, ramMemory]
}

console.log(computer.ram);
console.log(computer);
for (const ram of computer.ram) {
    console.log(ram.name, ram.size, "MBs");
}