function myFunc(a,b,...args) {
    let sum = 0;
    for (let arg of args) {
        sum += arg;
    }
    return (a * b) + sum;
}

console.log(myFunc(4,9,7,2,4));