function sum(...args) {
    let total = 0;
    for (let arg of args) {
        total += arg;
    }
    return total;
}

console.log(sum(1, 2, 3, 3));
console.log(sum(...[5, 4, 3, 2, 1]));
