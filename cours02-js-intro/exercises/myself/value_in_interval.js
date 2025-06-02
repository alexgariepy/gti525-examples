
function isBetween(x, min, max){
    return ( x >= min && x <= max)
}

console.log(isBetween(2, 1, 5));   // true
console.log(isBetween(2, 10, 15)); // false