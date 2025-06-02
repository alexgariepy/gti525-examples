function calculate(i,j, callback){
    console.log("executing function sent in param")
    return callback(i,j);
}

function add(i,j){
    return i+j
}

function multiply(i,j){
    return i*j
}


console.log(calculate(5, 3, add));        // Affiche : 8
console.log(calculate(5, 3, multiply));   // Affiche : 15