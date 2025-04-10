function countdown(number) {
    if (number == 0) {
        return 
    }
    setTimeout(() => {
        console.log(number);
        return countdown(number - 1);
    }, 300)
}

//countdown(9);

function sum(number, result = 0) {
    if (number < 1) {
        return result;
    }

    return sum(number - 1, result + number);
}

console.log(sum(20));

