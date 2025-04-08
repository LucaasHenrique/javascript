const rl = require("node:readline");

const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout
})

prompt.question()
prompt.close();